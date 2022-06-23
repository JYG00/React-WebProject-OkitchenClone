import React from 'react';
import { Link } from 'react-router-dom';
import style from './tip.module.css';
import Footer from '../footer';
// 계량 아이콘, 사진들
import tip_icon01 from '../img/tip_icon01.gif';
import tip_icon02 from '../img/tip_icon02.gif';
import tip_icon03 from '../img/tip_icon03.gif';
import tip01 from '../img/tip01.jpg';
import tip02 from '../img/tip02.jpg';
import tip03 from '../img/tip03.jpg';
import tip04 from '../img/tip04.jpg';
// 재료 배열
import ingredientList from '../component/ingredient/ingredientList.js';
import Ingredient from '../component/ingredient/ingredient';

function Tip() {
  return (
    <div className={style.container}>
      <div className={style.tip}>
        {/* 계량 팁 */}
        <div className={style.tip_head}>
          <div>
            {/* 홈, 현재 페이지 버튼 */}
            <div className={style.now_page}>
              <Link to="/">홈</Link>
              <Link to="/tip">계량 팁</Link>
            </div>
            {/* 한눈으로 살펴보는... */}
            <div className={style.tip_exp}>
              <div>
                <h2>계량 팁</h2>
                <p>한 눈으로 살펴보는 간단한 계량팁을 준비했어요~</p>
                <p>요리를 하려는데 계량 기구가 없다면</p>
                <p>다른 도구를 사용하거나 사진 속 분량을 보고 눈대중으로 헤아려서 할 수 있어요!</p>
              </div>
            </div>
          </div>
        </div>
        {/* 밥숟가락 계량 */}
        <Measurement
          tipImg1={tip01}
          tipImg1Head={'1 테이블스푼 (1T) = 15ml'}
          tipImg1Paragraph={'밥숟가락 1 큰술 정도의 양'}
          tipImg2={tip02}
          tipImg2Head={'1 티스푼 (1t) = 5ml'}
          tipImg2Paragraph={'밥숟가락 1/3 큰술 정도의 양'}
          tipIcon={tip_icon01}
          tipHead2={'밥숟가락 계량'}
          tipHead4={'테이블스푼(T)과 티스푼(t)은 어느 정도일까요?'}
          tipParagraph={'- 성인용 밥숟가락으로 계량해 볼 수 있어요.'}
        />
        {/* 종이컵 계량 */}
        <Measurement
          tipImg1={tip03}
          tipImg1Head={'액체 가득 1컵 = 약 180ml'}
          tipImg1Paragraph={''}
          tipImg2={tip04}
          tipImg2Head={'윗면을 깎아낸 밀가루 1컵 = 약 100g'}
          tipImg2Paragraph={''}
          tipIcon={tip_icon02}
          tipHead2={'종이컵 계량'}
          tipHead4={'밥숟가락 단위보다 더 많은 양은 어떻게 계량해야 할까요?'}
          tipParagraph={'- 소형 종이컵에 한 컵 가득 담은 양을 참고하여 가늠해볼 수 있어요.'}
        />
        {/* 재료별 분량 */}
        <Portion />
      </div>
      <Footer></Footer>
    </div>
  );
}

function Measurement({ tipImg1, tipImg1Head, tipImg1Paragraph, tipImg2, tipImg2Head, tipImg2Paragraph, tipIcon, tipHead2, tipHead4, tipParagraph }) {
  return (
    <div>
      {/* 계량 */}
      <div className={style.measurement}>
        <div>
          {/* tip_icon, tipHead2, tipHead4, tipParagraph */}
          <div className={style.measurement_exp}>
            <div className={style.measurement_exp_in}>
              <p>
                <img src={tipIcon} alt="spoonImage" />
              </p>
              <h2>{tipHead2}</h2>
              <h4>{tipHead4}</h4>
              <p>{tipParagraph}</p>
            </div>
            {/* tipImg1_part */}
            <div className={style.measurement_table}>
              <div className={style.measurement_img_part1}>
                {/* tipImg1 */}
                <div className={style.measurement_img}>
                  <img src={tipImg1} alt="tipImg1" />
                </div>
                {/* tipImg1Head, tipImg1Paragraph */}
                <div className={style.measurement_img_exp}>
                  <div>
                    <h4>{tipImg1Head}</h4>
                    <p>{tipImg1Paragraph}</p>
                  </div>
                </div>
              </div>
              {/* tipImg2_part */}
              <div className={style.measurement_img_part2}>
                {/* tipImg2 */}
                <div className={style.measurement_img}>
                  <img src={tipImg2} alt="teaSpoon" />
                </div>
                {/* tipImg2Head, tipImg2Paragraph */}
                <div className={style.measurement_img_exp}>
                  <div>
                    <h4>{tipImg2Head}</h4>
                    <p>{tipImg2Paragraph}</p>
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

function Portion() {
  return (
    <div>
      {/* 재료별 분량 */}
      <div className={style.portion}>
        <div>
          {/* 자주쓰는 재료들의 무게가 궁금해요! */}
          <div className={style.ingredient_exp}>
            <div className={style.ingredient_exp_in}>
              <p>
                <img src={tip_icon03} alt="spoonImage" />
              </p>
              <h2>재료별 분량</h2>
              <h4>자주 쓰는 재료들의 무게가 궁금해요!</h4>
              <p>- 사진에 담긴 재료의 양을 참고하여 눈대중으로 분량을 재어봅시다.</p>
            </div>
            {/* 재료별 사진 */}
            <div className={style.ingredient_img_part}>
              <div>
                {ingredientList.map((ingredient) => (
                  <Ingredient key={ingredient.id} id={ingredient.id} src={ingredient.src} text={ingredient.text}></Ingredient>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tip;
