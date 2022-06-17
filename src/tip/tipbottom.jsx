import React from "react";
import style from "./tipbottom.module.css";
import tip_icon03 from "../img/tip_icon03.gif";
import ingredientList from "./ingredientList.js";
import Ingredient from "./ingredient";
function TipBottom() {
  return (
    <div>
      {/* 재료별 분량 */}
      <div className={style.tip_bottom}>
        <div>
          {/* 자주쓰는 재료들의 무게가 궁금해요! */}
          <div className={style.spoon_exp}>
            <div className={style.spoon_exp_in}>
              <p>
                <img src={tip_icon03} alt="spoonImage" />
              </p>
              <h2>재료별 분량</h2>
              <h4>자주 쓰는 재료들의 무게가 궁금해요!</h4>
              <p>
                - 사진에 담긴 재료의 양을 참고하여 눈대중으로 분량을 재어봅시다.
              </p>
            </div>
            {/* 재료별 사진 */}
            <div className={style.spoon_img_part}>
              <div>
                {ingredientList.map((ingredient) => (
                  <Ingredient
                    key={ingredient.id}
                    id={ingredient.id}
                    src={ingredient.src}
                    text={ingredient.text}
                  ></Ingredient>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipBottom;
