import React from "react";
import style from "./tipmiddle.module.css";
function TipMiddle() {
  return (
    <div>
      {/* 밥숟가락 계량 */}
      <div className={style.tip_middle}>
        <div>
          {/* 테이블스푼과 티스푼은... */}
          <div className={style.spoon_exp}>
            <div className={style.spoon_exp_in}>
              <p>
                <img src="/img/tip_icon01.gif" alt="spoonImage" />
              </p>
              <h2>종이컵 계량</h2>
              <h4>밥숟가락 단위보다 더 많은 양은 어떻게 계량해야 할까요?</h4>
              <p>
                - 소형 종이컵에 한 컵 가득 담은 양을 참고하여 가늠해볼 수
                있어요.
              </p>
            </div>
            {/* 숟가락 사진 */}
            <div className={style.spoon_img_part}>
              {/* 사진1.테이블스푼 */}
              <div className={style.spoon_table}>
                {/* 사진 */}
                <div className={style.spoon_img}>
                  <img src="/img/tip01.jpg" alt="tableSpoon" />
                </div>
                {/* 사진에 대한 설명 */}
                <div className={style.spoon_img_exp}>
                  <div>
                    <h4>액체 가득 1컵 = 약 180ml</h4>
                  </div>
                </div>
              </div>
              {/* 사진2.티스푼 */}
              <div className={style.spoon_tea}>
                {/* 사진 */}
                <div className={style.spoon_img}>
                  <img src="/img/tip02.jpg" alt="teaSpoon" />
                </div>
                {/* 사진에 대한 설명 */}
                <div className={style.spoon_img_exp}>
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
