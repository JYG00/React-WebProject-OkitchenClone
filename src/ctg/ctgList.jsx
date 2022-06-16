import { useState, useEffect } from "react";
import style from "./ctgList.module.css";
import ctg_icon from "../img/ctg_icon.png";
import { Route, Link, useLocation } from "react-router-dom";
import CtgTable from "./ctgTable";
import { useRef } from "react";

export default function CtgList({ type }) {
  const [ctg, setCtg] = useState();
  const location = useLocation();
  // 카테고리 리스트를 DOM을 담는 배열
  const ref = useRef([]);

  // ref.current.map((ref) => {
  //   ref.value === type && console.log("good");
  // });

  // setState를 동기적으로 처리하기 위함
  const set = (param) => {
    setCtg(param);
  };

  useEffect(() => {
    ref.current.map((ref) => (ref.className = ""));
    console.log("props2:" + ctg);
    ref.current
      .filter((ref) => ref.getAttribute("value") === ctg)
      .map((ref) => (ref.className = `${style.active}`));
  }, [set]);

  // 헤더에서 선택한 카테고리에 active 클래스 부여
  useEffect(() => {
    ref.current.map((ref) => (ref.className = ""));
    console.log("useEffect 실행");
    set(type);
  }, [type]);

  useEffect(() => {
    ref.current.map((ref) => (ref.className = ""));
    console.log("useEffect 실행");
    ref.current
      .filter((ref) => ref.getAttribute("value") === type)
      .map((ref) => (ref.className = `${style.active}`));
  }, []);

  const onClick = (e) => {
    set(e.currentTarget.getAttribute("value"));
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
          <CtgTable type={ctg} />
        </div>
      </div>
    </div>
  );
}
