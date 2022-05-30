import React from "react";
import style from "./tipbottom.module.css";
import tip_icon from "../img/tip_icon01.gif";
import tip01 from "../img/tip01.jpg";
import tip02 from "../img/tip02.jpg";
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
                <img src={tip_icon} alt="spoonImage" />
              </p>
              <h2>재료별 분량</h2>
              <h4>자주 쓰는 재료들의 무게가 궁금해요!</h4>
              <p>
                - 사진에 담긴 재료의 양을 참고하여 눈대중으로 분량을 재어봅시다.
              </p>
            </div>
            {/* 재료별 사진 */}
            <div className={style.spoon_img_part}>
              {/* 사진1.테이블스푼 */}
              <div className={style.spoon_table}>
                {/* 사진 */}
                <div className={style.spoon_img}>
                  <img src={tip01} alt="tableSpoon" />
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
                  <img src={tip02} alt="teaSpoon" />
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

export default TipBottom;
