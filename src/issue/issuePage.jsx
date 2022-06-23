import React, { useState } from 'react';
import style from './issuePage.module.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsCheck } from 'react-icons/bs';
import allDataList from '../data/allDataList';
import Food from '../component/food/food';

function IssuePage() {
  // 최신순, 조회순 버튼에 따라서 해당 내용 출력
  const [recentlyViewOrder, setRecentlyViewOrder] = useState(true);

  //페이지 목록 버튼을 클릭시 이벤트 발생
  const onClick_top = (e) => {
    switch (e.target.value) {
      case '최신순':
        setRecentlyViewOrder(true);
        setBtn(true);
        break;
      case '조회순':
        setRecentlyViewOrder(false);
        setBtn(true);
        break;
      default:
        break;
    }
  };

  // 페이지 목록 버튼
  const [btn, setBtn] = useState(true);

  //페이지 목록 버튼을 클릭시 이벤트 발생
  const onClick = (e) => {
    switch (e.target.value) {
      case '1':
        setBtn(true);
        break;
      case '2':
        setBtn(false);
        break;
      default:
        setBtn(!btn);
        break;
    }
  };

  // 최신 날짜순으로 인기 종목 34종류 정렬
  let recently_order = [];
  allDataList
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((food) => food.view > 300)
    .map((food) => recently_order.push(food));
  // console.log(recently_order);

  // 조회순으로 인기 종목 34종류 정렬
  let view_order = [];
  allDataList
    .sort((a, b) => b.view - a.view)
    .filter((food) => food.view > 300)
    .map((food) => view_order.push(food));
  // console.log(view_order);

  return (
    <div>
      {/* 인기레시피 내용,사진 */}
      <div className={style.issue_content}>
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
                      <input type="button" value="최신순" className={style.check} onClick={onClick_top} />
                    </li>
                    <li>
                      <input type="button" value="조회순" onClick={onClick_top} />
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <p>
                    검색결과 <strong>{view_order.length}</strong>건 조회
                  </p>
                  <ul>
                    <li style={{ marginRight: '12px' }}>
                      <input type="button" value="최신순" onClick={onClick_top} />
                    </li>
                    <li>
                      <BsCheck />
                      <input type="button" value="조회순" className={style.check} onClick={onClick_top} />
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
              ? btn === true
                ? recently_order
                    .filter((food) => recently_order.indexOf(food) < 20)
                    .map((food) => (
                      <li key={food.id}>
                        <Food id={food.id} src={food.src} hash={food.hash} name={food.name}></Food>
                      </li>
                    ))
                : recently_order
                    .filter((food) => recently_order.indexOf(food) > 19)
                    .map((food) => (
                      <li key={food.id}>
                        <Food id={food.id} src={food.src} hash={food.hash} name={food.name}></Food>
                      </li>
                    ))
              : btn === true
              ? view_order
                  .filter((food) => view_order.indexOf(food) < 20)
                  .map((food) => (
                    <li key={food.id}>
                      <Food id={food.id} src={food.src} hash={food.hash} name={food.name}></Food>
                    </li>
                  ))
              : view_order
                  .filter((food) => view_order.indexOf(food) > 19)
                  .map((food) => (
                    <li key={food.id}>
                      <Food id={food.id} src={food.src} hash={food.hash} name={food.name}></Food>
                    </li>
                  ))}
          </ul>
          {/* 하단 리스트 버튼 */}
          <div className={style.content_list}>
            <div>
              {/* 페이지의 번호에 따라 렌더링 */}
              {btn === true ? (
                <div>
                  <input type="button" className={style.on} value="1" onClick={onClick} />
                  <input type="button" value="2" onClick={onClick} />
                  <label>
                    <button type="button" onClick={onClick} className={style.arrow_btn}>
                      <IoIosArrowForward />
                    </button>
                  </label>
                </div>
              ) : (
                <div>
                  <label>
                    <button type="button" onClick={onClick} className={style.arrow_btn_back}>
                      <IoIosArrowBack />
                    </button>
                  </label>
                  <input type="button" value="1" onClick={onClick} />
                  <input type="button" className={style.on} value="2" onClick={onClick} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssuePage;
