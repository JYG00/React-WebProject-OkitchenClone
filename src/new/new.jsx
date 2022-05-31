import React from "react";
import style from "./new.module.css";
import Footer from "../footer";
import foodList from "./foodList";
import Food from "./food.jsx";

function Tip() {
  return (
    <div>
      <div className={style.new}>
        {/* 신규레시피 메뉴바 */}
        <div className={style.new_bar}>
          <h2>신규레시피</h2>
        </div>
        {/* 신규레시피 내용,사진 */}
        <div className={style.content}>
          <ul className={style.content_in}>
            {foodList.map((food) => (
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
      <Footer></Footer>
    </div>
  );
}

export default Tip;
