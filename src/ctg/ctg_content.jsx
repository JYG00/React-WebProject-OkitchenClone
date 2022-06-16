import React, { useRef } from "react";
import style from "./ctg_content.module.css";
import allDataList from "../search/allDataList";
import { useState } from "react";
import Food from "../search/food";
import { BsCheck } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect } from "react";

export default function Ctg_content({ props }) {
  // 최신순, 조회순 버튼에 따라서 해당 내용 출력
  const [recentlyViewOrder, setRecentlyViewOrder] = useState(true);

  //페이지 목록 버튼을 클릭시 이벤트 발생
  const onClick_top = (e) => {
    switch (e.target.value) {
      case "최신순":
        setRecentlyViewOrder(true);
        break;
      case "조회순":
        setRecentlyViewOrder(false);
        break;
      default:
        break;
    }
  };

  const foodArray = [...allDataList];

  // // 최신 날짜순으로 검색 단어를 정렬
  // let recently_order = [];
  // foodArray
  //   .sort((a, b) => new Date(b.date) - new Date(a.date))
  //   .map((food) => recently_order.push(food));

  // // 조회순으로 검색 단어를 정렬
  // let view_order = [];
  // foodArray
  //   .sort((a, b) => b.view - a.view)
  //   .map((food) => view_order.push(food));

  // 하단 리스트 버튼 DOM
  const listRef = useRef([]);
  const [btn, setBtn] = useState(1);
  const [index, setIndex] = useState([-1, 20]);

  // 하단 버튼 클릭시 setBtn으로 리스트 바꿈
  const onClick = (e) => {
    console.log("onclick 실행");
    set(e.currentTarget.getAttribute("value"));
  };
  const set = (params) => {
    console.log("set 실행");
    console.log("set : " + params);
    let intParams = 1;

    switch (params) {
      case "plus":
        setBtn(btn + 1);
        settingIndex(btn + 1);
        break;
      case "minus":
        setBtn(btn - 1);
        settingIndex(btn + 1);
        break;
      default:
        // 정수형으로 처리하기 위함
        intParams *= params;
        setBtn(intParams);
        settingIndex(intParams);
        break;
    }
  };
  useEffect(() => {
    console.log("effect 실행");
    console.log(btn);
    listRef.current.map((ref) => (ref.className = ""));
    listRef.current
      .filter((ref) => ref.getAttribute("value") === `${btn}`)
      .map((ref) => (ref.className = `${style.on}`));
    switch (btn) {
      case 1:
        listRef.current[0].style = "display:none";
        listRef.current[5].style = "display:inlineBlock";
        // setIndex([-1, 20]);
        // console.log(index);
        break;
      case 2:
        listRef.current[0].style = "display:inlineBlock";
        listRef.current[5].style = "display:inlineBlock";
        // setIndex([20, 40]);
        break;
      case 3:
        listRef.current[0].style = "display:inlineBlock";
        listRef.current[5].style = "display:inlineBlock";
        // setIndex([40, 60]);
        break;
      case 4:
        listRef.current[0].style = "display:inlineBlock";
        listRef.current[5].style = "display:none";
        // setIndex([60, 80]);
        break;
      default:
        console.log("error");
        break;
    }
  }, [set]);

  const settingIndex = (key) => {
    switch (key) {
      case 1:
        setIndex([-1, 20]);
        console.log(index);
        break;
      case 2:
        setIndex([19, 40]);
        console.log(index);
        break;
      case 3:
        setIndex([39, 60]);
        console.log(index);
        break;
      case 4:
        setIndex([59, 80]);
        console.log(index);
        break;
      default:
        break;
    }
  };
  // 동기적 코드로 처리하기 위함
  useEffect(() => {
    console.log("result");
    console.log(index);
  }, [settingIndex]);

  // 최신 날짜순으로 검색 단어를 정렬
  let recently_order = [];
  // 조회순으로 검색 단어를 정렬
  let view_order = [];

  if (props) {
    // props 를 전달 받았으면 필터링해서 보여줌
    foodArray
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .filter((food) => food.hash.toString().includes(props))
      .map((food) => recently_order.push(food));
    foodArray
      .sort((a, b) => b.view - a.view)
      .map((food) => view_order.push(food));
  } else {
    foodArray
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((food) => recently_order.push(food));
    foodArray
      .sort((a, b) => b.view - a.view)
      .map((food) => view_order.push(food));
  }

  return (
    <div style={style.container}>
      <div className={style.content}>
        <div className={style.content_in}>
          <div className={style.content_switch}>
            <div>
              {recentlyViewOrder === true ? (
                <>
                  <p>
                    검색결과 <strong>{recently_order.length}</strong>건 조회
                  </p>
                  <ul>
                    <li>
                      <BsCheck />
                      <input
                        type="button"
                        value="최신순"
                        className={style.check}
                        onClick={onClick_top}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        value="조회순"
                        onClick={onClick_top}
                      />
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <p>
                    검색결과 <strong>{view_order.length}</strong>건 조회
                  </p>
                  <ul>
                    <li style={{ marginRight: "12px" }}>
                      <input
                        type="button"
                        value="최신순"
                        onClick={onClick_top}
                      />
                    </li>
                    <li>
                      <BsCheck />
                      <input
                        type="button"
                        value="조회순"
                        className={style.check}
                        onClick={onClick_top}
                      />
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
          <ul>
            {/* 기준1. 조회순? 최신순? 따라서 렌더링*/}
            {/* 기준2. 페이지 리스트에 따라서 렌더링*/}
            {recentlyViewOrder === true
              ? recently_order
                  .filter(
                    (food) =>
                      recently_order.indexOf(food) > index[0] &&
                      recently_order.indexOf(food) < index[1]
                  )
                  .map((food) => (
                    <li>
                      <Food
                        id={food.id}
                        src={food.src}
                        hash={food.hash}
                        name={food.name}
                      ></Food>
                    </li>
                  ))
              : view_order
                  .filter(
                    (food) =>
                      view_order.indexOf(food) > index[0] &&
                      view_order.indexOf(food) < index[1]
                  )
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
        </div>
      </div>
      {/* 하단 리스트 버튼 */}
      <div className={style.content_list}>
        <div>
          <div>
            {/* < 버튼 */}
            <button
              onClick={onClick}
              className={style.arrow_btn_back}
              value="minus"
              ref={(elem) => (listRef.current[0] = elem)}
            >
              <IoIosArrowBack />
            </button>

            <input
              type="button"
              className={style.on}
              value="1"
              onClick={onClick}
              ref={(elem) => (listRef.current[1] = elem)}
            />
            <input
              type="button"
              value="2"
              onClick={onClick}
              ref={(elem) => (listRef.current[2] = elem)}
            />
            <input
              type="button"
              value="3"
              onClick={onClick}
              ref={(elem) => (listRef.current[3] = elem)}
            />
            <input
              type="button"
              value="4"
              onClick={onClick}
              ref={(elem) => (listRef.current[4] = elem)}
            />
            {/* > 버튼 */}
            <button
              onClick={onClick}
              className={style.arrow_btn}
              value="plus"
              ref={(elem) => (listRef.current[5] = elem)}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
