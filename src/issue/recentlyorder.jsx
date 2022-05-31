import React, { useRef } from "react";
import { Route, Link } from "react-router-dom";
import style from "./recentlyorder.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import foodList from "./dataList";
import Food from "./food";

function RecentlyOrder() {
  return (
    <div>
      <Route path="/issue/recentlyorder" component={Page1}></Route>
    </div>
  );
}

function Page1() {
  // 상단 리스트 버튼 DOM
  const recently_btn = useRef();
  const view_btn = useRef();
  // 하단 리스트 버튼 DOM
  const list1 = useRef();
  const list2 = useRef();

  // 상단 리스트를 버튼을 클릭할 때 스타일 적용
  const onClick_top = (e) => {
    recently_btn.current.className = "";
    view_btn.current.className = "";
    e.target.className = `${style.check}`;
  };
  // 하단 리스트 버튼을 클릭할 때 스타일 적용
  const onClick_bottom = (e) => {
    list1.current.className = "";
    list2.current.className = "";
    e.target.className = `${style.on}`;
  };
  return (
    <div>
      {/* 인기레시피 내용,사진 */}
      <div className={style.issue_content}>
        <div className={style.content_in}>
          <div className={style.content_switch}>
            <div>
              <p>검색결과 조회</p>
              <ul>
                <li>
                  <Link
                    to="/issue/recentlyorder"
                    className={style.check}
                    ref={recently_btn}
                    onClick={onClick_top}
                  >
                    최신순
                  </Link>
                </li>
                <li>
                  <Link
                    to="/issue/vieworder"
                    ref={view_btn}
                    onClick={onClick_top}
                  >
                    조회순
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul>
            {/* map 함수로 foodList에서 데이터 가져오기 */}
            {foodList
              .filter((food) => food.id < 21)
              .map((food) => (
                <li>
                  <Food
                    id={food.id}
                    src={food.src}
                    hash={food.hash}
                    name={food.name}
                  ></Food>
                </li>
              ))}
          </ul>
          {/* 하단 리스트 버튼 */}
          <div className={style.content_list}>
            <div>
              <Link
                to="/issue/recentlyorder"
                className={style.on}
                onClick={onClick_bottom}
                ref={list1}
              >
                1
              </Link>

              <Link
                to="/issue/recentlyorder2"
                onClick={onClick_bottom}
                ref={list2}
              >
                2
              </Link>

              <Link to="/issue/recentlyorder2" className={style.arrow_btn}>
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Route path="/issue/recentlyorder2" component={Page2}></Route>
      </div>
    </div>
  );
}

function Page2() {
  // 상단 리스트 버튼 DOM
  const recently_btn = useRef();
  const view_btn = useRef();
  // 하단 리스트 버튼 DOM
  const list1 = useRef();
  const list2 = useRef();

  // 상단 리스트를 버튼을 클릭할 때 스타일 적용
  const onClick_top = (e) => {
    recently_btn.current.className = "";
    view_btn.current.className = "";
    e.target.className = `${style.check}`;
  };
  // 하단 리스트 버튼을 클릭할 때 스타일 적용
  const onClick_bottom = (e) => {
    list1.current.className = "";
    list2.current.className = "";
    e.target.className = `${style.on}`;
  };
  return (
    <div>
      {/* 인기레시피 내용,사진 */}
      <div className={style.issue_content}>
        <div className={style.content_in}>
          <div className={style.content_switch}>
            <div>
              <p>검색결과 조회</p>
              <ul>
                <li>
                  <Link
                    to="/issue/recentlyorder"
                    className={style.check}
                    ref={recently_btn}
                    onClick={onClick_top}
                  >
                    최신순
                  </Link>
                </li>
                <li>
                  <Link
                    to="/issue/vieworder"
                    ref={view_btn}
                    onClick={onClick_top}
                  >
                    조회순
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul>
            {/* map 함수로 foodList에서 데이터 가져오기 */}
            {foodList
              .filter((food) => food.id > 20)
              .map((food) => (
                <li>
                  <Food
                    id={food.id}
                    src={food.src}
                    hash={food.hash}
                    name={food.name}
                  ></Food>
                </li>
              ))}
          </ul>
          {/* 하단 리스트 버튼 */}
          <div className={style.content_list}>
            <div style={{ paddingRight: "2%" }}>
              <Link to="/issue/recentlyorder" className={style.arrow_btn_back}>
                <IoIosArrowBack />
              </Link>
              <Link
                to="/issue/recentlyorder1"
                onClick={onClick_bottom}
                ref={list1}
              >
                1
              </Link>

              <Link
                to="/issue/recentlyorder2"
                className={style.on}
                onClick={onClick_bottom}
                ref={list2}
              >
                2
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { RecentlyOrder, Page1, Page2 };
