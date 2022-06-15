import { useState, useEffect } from "react";
import style from "./ctgList.module.css";
import ctg_icon from "../img/ctg_icon.png";
import { Route, Link } from "react-router-dom";
import Ctg_All from "./ctg_All";
import { useRef } from "react";

export default function CtgList({ type }) {
  const [ctg, setCtg] = useState(type);

  const ref = useRef([]);

  // ref.current.map((ref) => {
  //   ref.value === type && console.log("good");
  // });

  // 헤더에서 선택한 카테고리에 active 클래스 부여
  useEffect(() => {
    console.log("useEffect 실행");
    ref.current
      .filter((ref) => ref.getAttribute("value") === type)
      .map((ref) => (ref.className = `${style.active}`));
  }, []);

  const onClick = (e) => {
    ref.current.map((ref) => (ref.className = ""));
    setCtg(e.currentTarget.getAttribute("value"));

    e.currentTarget.className = `${style.active}`;
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        {/* 카테고리 리스트 */}
        <div className={style.ctg_list}>
          <ul>
            <li>
              <Link
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: "0px",
                }}
                onClick={onClick}
                value="all"
                ref={(elem) => (ref.current[0] = elem)}
              ></Link>
              <span>전체</span>
            </li>
            <li>
              <Link
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: "-98px",
                }}
                onClick={onClick}
                value="kind"
                ref={(elem) => (ref.current[1] = elem)}
              ></Link>
              <span>종류</span>
            </li>
            <li>
              <Link
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: "-196px",
                }}
                onClick={onClick}
                value="material"
                ref={(elem) => (ref.current[2] = elem)}
              ></Link>
              <span>재료</span>
            </li>
            <li>
              <Link
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: "-294px",
                }}
                onClick={onClick}
                value="way"
                ref={(elem) => (ref.current[3] = elem)}
              ></Link>
              <span>방법</span>
            </li>
            <li>
              <Link
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: "-392px",
                }}
                onClick={onClick}
                value="theme"
                ref={(elem) => (ref.current[4] = elem)}
              ></Link>
              <span>테마</span>
            </li>
            <li>
              <Link
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: "-490px",
                }}
                onClick={onClick}
                value="anniversary"
                ref={(elem) => (ref.current[5] = elem)}
              ></Link>
              <span>기념일</span>
            </li>
            <li>
              <Link
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: "-588px",
                }}
                onClick={onClick}
                value="tool"
                ref={(elem) => (ref.current[6] = elem)}
              ></Link>
              <span>도구</span>
            </li>
          </ul>
        </div>
        <div>
          <Ctg_All type={ctg} />
        </div>
      </div>
    </div>
  );
}
