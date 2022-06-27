import React, { useEffect, useState } from 'react';
import style from './main.module.css';
import Footer from './footer';
import { useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// 메인 슬라이드(carousel) 이미지
import main01 from './img/main01.jpg';
import main02 from './img/main02.jpg';
import main03 from './img/main03.jpg';
import main04 from './img/main04.jpg';
import main05 from './img/main05.jpg';
import main06 from './img/main06.jpg';
import main07 from './img/main07.jpg';
// 메인 슬라이드 리스트 아이콘
import stopBtn from './img/visual_stop.png';
import startBtn from './img/visual_start.png';

function Main() {
  const mainRef = useRef();
  const pageRef = useRef();
  const history = useHistory();

  const [xPosition, setXPosition] = useState(-2000);
  const [page, setPage] = useState(1);
  const [isRunning, setRunning] = useState(true);

  // 왼쪽 화살표 버튼을 누를경우
  const onClickLeft = () => {
    // 페이지 -1
    setPageNum(page - 1);
    // 슬라이드가 왼쪽으로 이동
    set(xPosition + 2000);
  };
  // 오른쪽 화살표 버튼을 누를경우
  const onClickRight = () => {
    // 페이지 +1
    setPageNum(page + 1);
    // 슬라이드 오른쪽 이동
    set(xPosition - 2000);
  };

  // 자동 슬라이드 정지
  const onClickStop = () => {
    setRun(false);
  };

  // 자동 슬라이드 재생
  const onClickPlay = () => {
    setRun(true);
  };

  // 동기적 코드로 처리하기 위함
  const set = (param) => {
    setXPosition(param);
  };
  const setPageNum = (param) => {
    setPage(param);
  };
  const setRun = (param) => {
    setRunning(param);
  };

  // 슬라이드 위치가 바뀌면 호출
  useEffect(() => {
    // xPosition에 따라서 슬라이드 위치 변경
    mainRef.current.className = `${style.mainImg_in}`;
    mainRef.current.style.transform = `translateX(${xPosition}px)`;
    // mainRef.current.style.left = `${xPosition}px`;
    console.log(pageRef.current.getAttribute('value'));
    // 마지막 페이지에서 첫 페이지로 부드럽게 이동
    if (pageRef.current.getAttribute('value') == 8) {
      history.push('/');
      // 페이지를 1로 설정
      setPageNum(1);
      mainRef.current.className = `${style.mainImg_in_none}`;
      mainRef.current.style.transform = `translateX(0px)`;
      set(-2000);
    }
    // 첫 페이지에서 마지막 페이지로 부드럽게 이동
    if (pageRef.current.getAttribute('value') < 1) {
      // 페이지를 7로 설정
      setPageNum(7);
      // 슬라이드가 이어지는 효과를 주기 위해서 transition:none 부여
      mainRef.current.className = `${style.mainImg_in_none}`;
      mainRef.current.style.transform = `translateX(-16000px)`;
      // mainRef.current.style.left = '-16000px';
      set(-14000);
    }
  }, [xPosition]);

  // 5초마다 슬라이드가 옆으로 이동
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        // 5초마다 슬라이드가 오른쪽으로 이동
        onClickRight();
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className={style.main}>
      {/* 메인 슬라이드 */}
      <div className={style.mainImg}>
        <div className={style.mainSlideBtn_container}>
          <div>
            {/* 왼쪽 화살표 버튼 */}
            <div className={style.mainSlideBtn} id={style.mainSlideLeft} onClick={onClickLeft}></div>
            {/* 오른쪽 화살표 버튼 */}
            <div className={style.mainSlideBtn} id={style.mainSlideRight} onClick={onClickRight}></div>
          </div>
        </div>
        {/* 슬라이드 리스트 버튼 */}
        <div className={style.mainSlideListBtn_container}>
          <div className={style.pageBtn}>
            {/* 멈춤 버튼 */}
            <div style={{ background: `url(${stopBtn})` }} onClick={onClickStop}></div>
            <span ref={pageRef} value={page}>
              {page} / 7
            </span>
            {/* 재생 버튼 */}
            <div style={{ background: `url(${startBtn})` }} onClick={onClickPlay}></div>
          </div>
        </div>
        {/* 메인 슬라이드 이미지*/}
        <div className={style.mainImg_in} ref={mainRef}>
          <div className={style.mainSlide} style={{ background: `url(${main07}) no-repeat center`, backgroundSize: 'cover' }}>
            <div>contenttag</div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main01}) no-repeat center`, backgroundSize: 'cover' }}>
            <div>contenttag</div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main02}) no-repeat center`, backgroundSize: 'cover' }}></div>
          <div className={style.mainSlide} style={{ background: `url(${main03}) no-repeat center`, backgroundSize: 'cover' }}></div>
          <div className={style.mainSlide} style={{ background: `url(${main04}) no-repeat center`, backgroundSize: 'cover' }}></div>
          <div className={style.mainSlide} style={{ background: `url(${main05}) no-repeat center`, backgroundSize: 'cover' }}></div>
          <div className={style.mainSlide} style={{ background: `url(${main06}) no-repeat center`, backgroundSize: 'cover' }}></div>
          <div className={style.mainSlide} style={{ background: `url(${main07}) no-repeat center`, backgroundSize: 'cover' }}></div>
          <div className={style.mainSlide} style={{ background: `url(${main01}) no-repeat center`, backgroundSize: 'cover' }}></div>
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

function MainSlideExp({ keyTop, keyMiddle, keyBottom, hashBtn, mainBtn }) {
  return (
    <div>
      <div>
        {/* 키워드 상단 밑줄 */}
        <div className={style.keyTop}>{keyTop}</div>
        {/* 키워드 중간 */}
        <div className={style.keyMiddle}>{keyMiddle}</div>
        {/* 키워드 하단 제일 큰 글씨*/}
        <div className={style.keyBottom}>{keyBottom}</div>
        {/* 해쉬버튼 클릭 시 검색*/}
        <div className={style.hashBtn}>{hashBtn}</div>
        {/* 메인버튼 클릭 시 해당 카테고리 또는 링크로 이동*/}
        <div className={style.mainBtn}>{mainBtn}</div>
      </div>
    </div>
  );
}

export default Main;
