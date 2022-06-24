import React, { useEffect, useState } from 'react';
import style from './main.module.css';
import Footer from './footer';
import { useRef } from 'react';

function Main() {
  const mainRef = useRef();

  const [xPosition, setXPosition] = useState(-2381);

  // 왼쪽 화살표 버튼을 누를경우
  const onClickLeft = () => {
    mainRef.current.style.transition = 'all 0.3s ease-in-out';
    set(xPosition + 2381);
  };
  // 오른쪽 화살표 버튼을 누를경우
  const onClickRight = () => {
    mainRef.current.style.transition = 'all 0.3s ease-in-out';
    set(xPosition - 2381);
  };

  const set = (param) => {
    setXPosition(param);
  };

  useEffect(() => {
    mainRef.current.style.transition = 'all 0.3s ease-in-out';
    mainRef.current.style.left = `${xPosition}px`;
    // 마지막 페이지에 도달하면 첫 페이지로 이동
    if (xPosition === -19048) {
      mainRef.current.style.transition = 'none';
      mainRef.current.style.left = 0;
      set(-2381);
    }
    // 첫 페이지에 도달하면 마지막 페이지로 이동
    if (xPosition === 0) {
      mainRef.current.style.transition = 'none';
      mainRef.current.style.left = '-19048px';
      set(-16667);
    }
  }, [xPosition]);

  return (
    <div className={style.main}>
      {/* 메인이미지 */}
      <div className={style.mainImg}>
        <div className={style.mainSlideBtn_container}>
          {/* 왼쪽 화살표 버튼 */}
          <div className={style.mainSlideBtn} id={style.mainSlideLeft} onClick={onClickLeft}></div>
          {/* 오른쪽 화살표 버튼 */}
          <div className={style.mainSlideBtn} id={style.mainSlideRight} onClick={onClickRight}></div>
        </div>
        <div className={style.mainSlideListBtn_container}>
          <div></div>
        </div>
        <div className={style.mainImg_in} ref={mainRef}>
          <div className={style.mainSlide}>
            <img src={require('./img/main07.jpg')} alt="메인 슬라이드" />
          </div>
          <div className={style.mainSlide}>
            <img src={require('./img/main01.jpg')} alt="메인 슬라이드" />
          </div>
          <div className={style.mainSlide}>
            <img src={require('./img/main02.jpg')} alt="메인 슬라이드" />
          </div>
          <div className={style.mainSlide}>
            <img src={require('./img/main03.jpg')} alt="메인 슬라이드" />
          </div>
          <div className={style.mainSlide}>
            <img src={require('./img/main04.jpg')} alt="메인 슬라이드" />
          </div>
          <div className={style.mainSlide}>
            <img src={require('./img/main05.jpg')} alt="메인 슬라이드" />
          </div>
          <div className={style.mainSlide}>
            <img src={require('./img/main06.jpg')} alt="메인 슬라이드" />
          </div>
          <div className={style.mainSlide}>
            <img src={require('./img/main07.jpg')} alt="메인 슬라이드" />
          </div>
          <div className={style.mainSlide}>
            <img src={require('./img/main01.jpg')} alt="메인 슬라이드" />
          </div>
        </div>
      </div>
      {/* 인기 메뉴 */}
      <div className={style.popular}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      {/* 메뉴바 */}
      <div className={style.menubar}>MenuBarImg</div>
      {/* 추천레시피 */}
      <div className={style.recommend}>
        <ul>
          <li>
            {/* 추천레시피 오뚜기가 제안하는 레시피로 최고의 순간을 만들어 보세요. */}
            <ul className={style.recommend_header}>
              <li>
                <h2>추천레시피</h2>
              </li>
              <li>
                <p>오뚜기가 제안하는 레시피로 최고의 순간을 만들어 보세요.</p>
              </li>
            </ul>
          </li>
          <li>
            {/* 추천레시피 사진들 */}
            <ul className={style.recommend_content}>
              <li>
                {/* 왼쪽파트 */}
                <ul className={style.recommend_content_left}>
                  <li></li>
                  <li>
                    <ul className={style.recommend_content_left_bottom}>
                      <li></li>
                      <li></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                {/* 오른쪽파트 */}
                <ul className={style.recommend_content_right}>
                  <li></li>
                  <li></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* 셰프의 팁 간편식 업그레이드 */}
      <div className={style.chef}>
        {/* 오뚜기 간편식이 근사한 요리가 되는 팁을 공개합니다. */}
        <div>
          <ul className={style.chef_header}>
            <li>
              <h2>셰프의 팁 간편식 업그레이드</h2>
            </li>
            <li>
              <p>오뚜기 간편식이 근사한 요리가 되는 팁을 공개합니다.</p>
            </li>
          </ul>
        </div>
        {/* 사진 */}
        <div className={style.chef_img}></div>
      </div>
      {/* 인기 레시피 */}
      <div className={style.popularRecipe}>
        <ul>
          <li>
            {/* 오'키친에서 많은 분들이 찾아본 인기 레시피를 소개합니다. */}
            <div>
              <ul className={style.popularRecipe_header}>
                <li>
                  <h2>인기레시피</h2>
                </li>
                <li>
                  <p>오'키친에서 많은 분들이 찾아본 인기 레시피를 소개합니다.</p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            {/* 사진 */}
            <div className={style.popularRecipe_img}>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      {/* 하단메뉴바 */}
      <div className={style.menubar_bottom}>MenuBarBottomImg</div>
      <Footer></Footer>
    </div>
  );
}

function MainSlideExp() {
  return <div></div>;
}

export default Main;
