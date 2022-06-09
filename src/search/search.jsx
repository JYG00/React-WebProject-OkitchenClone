import React, { useEffect, useState } from "react";
import style from "./search.module.css";
import { Route, Link } from "react-router-dom";
import Footer from "../footer";
import allDataList from "./allDataList";
import Food from "./food";
import { useLocation } from "react-router";

function Search() {
  // History로 보낸 객체를 props에 받습니다
  const location = useLocation();
  const [props, setProps] = useState("");

  useEffect(() => {
    setProps(location.state.props);
    console.log(props);
  }, [location]);

  // 해쉬태크 버튼을 클릭하면 해당내용을 검색
  const onClick = (e) => {
    const s_value = e.target.value;
    // 버튼 앞에 #을 공백으로 대체
    const value = s_value.replace("#", "");
    setProps(value);
  };

  // 검색결과가 있는지 없는지 확인
  let result = [];
  allDataList
    .filter((food) => food.hash.toString().includes(props))
    .map((food) => result.push(food));

  return (
    <div>
      <div className={style.issue}>
        <div className={style.issue_bar}>
          <div>
            <h2 style={{ fontSize: "45px", color: "#333" }}>
              {props} 에 대한 검색결과
            </h2>
            <ul className={style.hash}>
              <li>
                <input type="button" value="#카레" onClick={onClick} />
              </li>
              <li>
                <input type="button" value="#마요네스" onClick={onClick} />
              </li>
              <li>
                <input type="button" value="#분식" onClick={onClick} />
              </li>
              <li>
                <input type="button" value="#브런치" onClick={onClick} />
              </li>
              <li>
                <input type="button" value="#집밥" onClick={onClick} />
              </li>
              <li>
                <input type="button" value="#치즈듬뿍" onClick={onClick} />
              </li>
              <li>
                <input type="button" value="#캠핑" onClick={onClick} />
              </li>
              <li>
                <input type="button" value="#간단 꿀조합" onClick={onClick} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <ul className={style.content_in}>
          {result.map((food) => (
            <li>
              <Food
                id={food.id}
                src={food.src}
                hash={food.hash}
                name={food.name}
              ></Food>
            </li>
          ))}
          {result.length === 0 && (
            <div className={style.none}>
              <h2>일치하는 검색 결과가 없습니다</h2>
            </div>
          )}
        </ul>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Search;
