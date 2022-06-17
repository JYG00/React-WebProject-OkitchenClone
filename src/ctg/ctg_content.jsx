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
  const [dateOrView, setDateOrView] = useState(true);

  // 음식 내용이 담긴 배열을 복사
  const foodArray = [...allDataList];
  const [dateOrder, setDateOrder] = useState([...foodArray]);
  const [viewOrder, setViewOrder] = useState([...foodArray]);

  // 하단 리스트 버튼 DOM
  const listRef = useRef([]);
  const [btn, setBtn] = useState(1);
  const [index, setIndex] = useState([-1, 20]);

  //페이지 목록 버튼을 클릭시 이벤트 발생
  const onClick_top = (e) => {
    switch (e.target.value) {
      case "최신순":
        setDateOrView(true);
        break;
      case "조회순":
        setDateOrView(false);
        break;
      default:
        break;
    }
  };

  // 하단 버튼 클릭시 setBtn으로 리스트 스타일 변경
  const onClick = (e) => {
    console.log("onclick 실행");
    console.log("value??");
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
  // useEffect는 동기적 코드처럼 작동하기 위함
  useEffect(() => {
    console.log("effect 실행!!");
    console.log(btn);
    listRef.current.map((ref) => (ref.className = ""));
    listRef.current
      .filter((ref) => ref.getAttribute("value") === `${btn}`)
      .map((ref) => (ref.className = `${style.on}`));
    switch (btn) {
      case 1:
        listRef.current[0].style = "display:none";
        listRef.current[5].style = "display:inlineBlock";
        break;
      case 2:
        listRef.current[0].style = "display:inlineBlock";
        listRef.current[5].style = "display:inlineBlock";
        break;
      case 3:
        listRef.current[0].style = "display:inlineBlock";
        listRef.current[5].style = "display:inlineBlock";
        break;
      case 4:
        listRef.current[0].style = "display:inlineBlock";
        listRef.current[5].style = "display:none";
        break;
      default:
        console.log("error");
        break;
    }
  }, [btn]);

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

  // 처음 렌더링 될때는 모든 배열을 렌더링
  useEffect(() => {
    setArray();
  }, []);

  // props를 넘겨받은 경우라면 조건에 따라서 렌더링
  useEffect(() => {
    setArray();
  }, [props]);

  const setArray = () => {
    let arr = [];
    let arr2 = [];
    if (props) {
      // 최신날짜순으로 정렬
      foodArray
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter((food) => food.hash.toString().includes(props))
        .map((food) => arr.push(food));
      setDateOrder(arr);

      // 조회순으로 정렬
      foodArray
        .sort((a, b) => b.view - a.view)
        .filter((food) => food.hash.toString().includes(props))
        .map((food) => arr2.push(food));
      setViewOrder(arr2);

      // props 의 해당되는 내용의 갯수에 따라서 페이지 버튼 스타일 적용
      switch (Math.ceil(arr.length / 20)) {
        case 1:
          listRef.current.map((ref) => (ref.style = "display:none"));
          break;
        case 2:
          listRef.current[3].style = "display:none";
          listRef.current[4].style = "display:none";
          break;
        case 3:
          listRef.current[4].style = "display:none";
          break;
        case 4:
          break;
        default:
          break;
      }
    } else {
      foodArray
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((food) => arr.push(food));
      setDateOrder(arr);
      foodArray.sort((a, b) => b.view - a.view).map((food) => arr2.push(food));
      setViewOrder(arr2);
    }
  };

  return (
    <div style={style.container}>
      <div className={style.content}>
        <div className={style.content_in}>
          <div className={style.content_switch}>
            <div>
              {dateOrView === true ? (
                <>
                  <p>
                    검색결과 <strong>{dateOrder.length}</strong>건 조회
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
                    검색결과 <strong>{viewOrder.length}</strong>건 조회
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
            {dateOrView === true
              ? dateOrder
                  .filter(
                    (food) =>
                      dateOrder.indexOf(food) > index[0] &&
                      dateOrder.indexOf(food) < index[1]
                  )
                  .map((food) => (
                    <li key={food.id}>
                      <Food
                        id={food.id}
                        src={food.src}
                        hash={food.hash}
                        name={food.name}
                      ></Food>
                    </li>
                  ))
              : viewOrder
                  .filter(
                    (food) =>
                      viewOrder.indexOf(food) > index[0] &&
                      viewOrder.indexOf(food) < index[1]
                  )
                  .map((food) => (
                    <li key={food.id}>
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
