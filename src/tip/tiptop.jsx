import React from "react";
import style from "./tiptop.module.css";
import tip_icon from "./img/tip_icon01.gif";
import tip01 from "./img/tip01.jpg";
import tip02 from "./img/tip02.jpg";
function TipTop() {
  return (
    <div>
      {/* 밥숟가락 계량 */}
      <div className={style.tip_top}>
        <div>
          {/* 테이블스푼과 티스푼은... */}
          <div className={style.spoon_exp}>
            <div className={style.spoon_exp_in}>
              <p>
                <img src={tip_icon} alt="spoonImage" />
              </p>
              <h2>밥숟가락 계량</h2>
              <h4>테이블스푼(T)과 티스푼(t)은 어느 정도일까요?</h4>
              <p>- 성인용 밥숟가락으로 계량해 볼 수 있어요.</p>
            </div>
            {/* 숟가락 사진 */}
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
                    <h4>1 테이블스푼 (1T) = 15ml</h4>
                    <p>밥숟가락 1 큰술 정도의 양</p>
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
                    <h4>1 티스푼 (1t) = 5ml</h4>
                    <p>밥숟가락 1/3 큰술 정도의 양</p>
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

export default TipTop;
