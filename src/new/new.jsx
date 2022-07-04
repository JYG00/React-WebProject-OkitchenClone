import React from 'react';
import style from './new.module.css';
import allDataList from '../data/allDataList';
import Footer from '../footer';
import Food from '../component/food/food';
import { Link } from 'react-router-dom';

function Tip() {
  // 날짜순으로 15개 정렬
  const foodArray = [...allDataList];

  let recently_order = [];
  foodArray
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((food) => foodArray.indexOf(food) < 15)
    .map((food) => recently_order.push(food));

  return (
    <div style={style.container}>
      <div className={style.new}>
        {/* 신규레시피 메뉴바 */}
        <div className={style.new_bar}>
          {/* 홈, 현재 페이지 버튼 */}
          <div className={style.PageController}>
            <div className={style.now_page}>
              <Link to="/">홈</Link>
              <Link to="/new">신규 레시피</Link>
            </div>
          </div>
          <div style={{ paddingTop: '20px' }}>
            <h2>신규레시피</h2>
          </div>
        </div>
        {/* 신규레시피 내용,사진 */}
        <div className={style.content}>
          <ul className={style.content_in}>
            {recently_order.map((food) => (
              <li key={food.id}>
                <Food id={food.id} src={food.src} hash={food.hash} name={food.name}></Food>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Tip;
