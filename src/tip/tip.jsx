import React from 'react';
import { Link } from 'react-router-dom';
import style from './tip.module.css';
import TipTop from './tiptop';
import TipMiddle from './tipmiddle';
import TipBottom from './tipbottom';
import Footer from '../footer';

function Tip() {
  return (
    <div>
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
        <TipTop></TipTop>
        {/* 종이컵 계량 */}
        <TipMiddle></TipMiddle>
        {/* 재료별 분량 */}
        <TipBottom></TipBottom>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Tip;
