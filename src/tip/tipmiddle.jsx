import React from "react";
import style from "./tipmiddle.module.css";
import tip_icon02 from "../img/tip_icon02.gif";
import tip03 from "../img/tip03.jpg";
import tip04 from "../img/tip04.jpg";
function TipMiddle() {
  return (
    <div>
      {/* 종이컵 계량 */}
      <div className={style.tip_middle}>
        <div>
          {/* 밥숟가락 단위보다... */}
          <div className={style.cup_exp}>
            <div className={style.cup_exp_in}>
              <p>
                <img src={tip_icon02} alt="spoonImage" />
              </p>
              <h2>종이컵 계량</h2>
              <h4>밥숟가락 단위보다 더 많은 양은 어떻게 계량해야 할까요?</h4>
              <p>
                - 소형 종이컵에 한 컵 가득 담은 양을 참고하여 가늠해볼 수
                있어요.
              </p>
            </div>
            {/* 종이컵 사진 */}
            <div className={style.cup_img_part}>
              {/* 종이컵 사진1 */}
              <div className={style.cup_table}>
                {/* 사진 */}
                <div className={style.cup_img}>
                  <img src={tip03} alt="tableSpoon" />
                </div>
                {/* 사진에 대한 설명 */}
                <div className={style.cup_img_exp}>
                  <div>
                    <h4>액체 가득 1컵 = 약 180ml</h4>
                  </div>
                </div>
              </div>
              {/* 종이컵 사진2 */}
              <div className={style.cup_tea}>
                {/* 사진 */}
                <div className={style.cup_img}>
                  <img src={tip04} alt="teaSpoon" />
                </div>
                {/* 사진에 대한 설명 */}
                <div className={style.cup_img_exp}>
                  <div>
                    <h4>윗면을 깎아낸 밀가루 1컵 = 약 100g</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipMiddle;
