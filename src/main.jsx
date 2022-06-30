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
// 메인 슬라이드 컨트롤러 아이콘
import stopBtn from './img/visual_stop.png';
import startBtn from './img/visual_start.png';
// 미니 슬라이드(carousel) 이미지
import mini01 from './img/쨈 아이스크림.jpg';
import mini02 from './img/옥수수 푸딩.jpg';
import mini03 from './img/피자 토스트.jpg';
// 미니 슬라이드 컨트롤러 아이콘
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
// 배너 '계량 팁' 사진
import tip_bg from './img/tip_bg.jpg';
import { getRcp } from './recentRecipe/recentRcp';

function Main() {
  // 메인 슬라이드 객체
  const mainRef = useRef();
  const mainSlideRef = useRef([]);
  // 메인 슬라이드 페이지 객체
  const pageRef = useRef();
  // 서브 슬라이드 객체
  const miniSlideRef = useRef();
  // 서브 슬라이드 페이지 객체
  const pageRef_sub = useRef();

  const history = useHistory();
  const location = useLocation();

  // 메인 슬라이드 포지션, 페이지, 자동유무
  const [page, setPage] = useState(1);
  const [isRunning, setRunning] = useState(true);

  // 서브 슬라이드 포지션, 페이지
  const [xPosition_sub, setXPosition_sub] = useState(-300);
  const [page_sub, setPage_sub] = useState(1);

  // 메인 슬라이드의 왼쪽 화살표 버튼을 누를경우
  const onClickLeft = () => {
    // 페이지 -1
    setPageNum(page - 1);
  };
  // 메인 슬라이드의 오른쪽 화살표 버튼을 누를경우
  const onClickRight = () => {
    // 페이지 +1
    setPageNum(page + 1);
  };

  // 자동 슬라이드 정지
  const onClickStop = () => {
    setRun(false);
  };

  // 자동 슬라이드 재생
  const onClickPlay = () => {
    setRun(true);
  };

  // 메인 슬라이드 위치 바뀌면 스타일 변경
  useEffect(() => {
    mainSlideRef.current.filter((ref) => ref.className === `${style.mainSlide_on}`).map((ref) => (ref.className = `${style.mainSlide}`));
    mainSlideRef.current[page].className = `${style.mainSlide_on}`;

    if (page === 8) {
      setPageNum(1);
    } else if (page === 0) {
      setPageNum(7);
    }
  }, [page]);

  // 자동 슬라이드
  useEffect(() => {
    // 자동유무
    if (isRunning) {
      // 5초마다 슬라이드가 오른쪽으로 이동
      const interval = setInterval(() => {
        setPageNum(page + 1);
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  // 서브 슬라이드의 왼쪽 화살표 버튼을 누를경우
  const onClickMiniSlideLeft = () => {
    // 페이지 -1
    setPageNum_sub(page_sub - 1);
    // 슬라이드가 왼쪽으로 이동
    set_sub(xPosition_sub + 300);
  };

  // 서브 슬라이드의 오른쪽 화살표 버튼을 누를경우
  const onClickMiniSlideRight = () => {
    // 페이지 +1
    setPageNum_sub(page_sub + 1);
    // 슬라이드 오른쪽 이동
    set_sub(xPosition_sub - 300);
  };

  // 서브 슬라이드 위치(xPosition_sub) 바뀌면 스타일도 맞게 변경
  useEffect(() => {
    // xPosition에 따라서 슬라이드 위치 변경
    miniSlideRef.current.className = `${style.miniSlide_container_on}`;
    miniSlideRef.current.style.transform = `translateX(${xPosition_sub}px)`;
    // 마지막 페이지에서 첫 페이지로 부드럽게 이동
    if (pageRef_sub.current.getAttribute('value') == 4) {
      // 페이지를 1로 설정
      setPageNum_sub(1);
      miniSlideRef.current.className = `${style.miniSlide_container_off}`;
      miniSlideRef.current.style.transform = `translateX(0px)`;
      // 포지션도 처음값으로 설정
      set_sub(-300);
    }
    // 첫 페이지에서 마지막 페이지로 부드럽게 이동
    if (pageRef_sub.current.getAttribute('value') < 1) {
      // 페이지를 3으로 설정
      setPageNum_sub(3);
      // 슬라이드가 이어지는 효과를 주기 위해서 transition:none 부여
      miniSlideRef.current.className = `${style.miniSlide_container_off}`;
      miniSlideRef.current.style.transform = `translateX(-1200px)`;
      // 포지션도 페이지 7에 맞게 변경
      set_sub(-900);
    }
  }, [xPosition_sub]);

  // 메인 슬라이드 클릭 시
  const onClickSlide = () => {
    // 클릭한 슬라이드의 페이지에 따라서 이동
    switch (page) {
      // 레시피 페이지로 이동
      case 1: {
        history.push({ pathname: '/detail', state: { name: '카레 토마토솥밥' } });
        break;
      }
      // 스피드 테마로 이동
      case 2: {
        history.push({
          pathname: '/ctg',
          state: { type: 'speed' },
        });
        break;
      }
      // 왕초보(요린이를 위하여) 테마로 이동
      case 3: {
        history.push({
          pathname: '/ctg',
          state: { type: 'child' },
        });
        break;
      }
      // 셰프의 팁! 테마로 이동
      case 4: {
        history.push({
          pathname: '/ctg',
          state: { type: 'chef' },
        });
        break;
      }
      // 도서관 페이지로 이동
      case 5: {
        history.push({
          pathname: '/none',
          state: { key: '허브·스파이스 전문 도서관 라이브러리 H' },
        });
        break;
      }
      // 생일 테마로 이동
      case 6: {
        history.push({
          pathname: '/ctg',
          state: { type: 'birthday' },
        });
        break;
      }
      // 오키친 스튜디오 페이지로 이동
      case 7: {
        history.push({
          pathname: '/none',
          state: { key: '오키친 스튜디오' },
        });
        break;
      }
      default: {
        break;
      }
    }
  };

  // 해쉬버튼 클릭시 (첫번째 배너)
  const onClick = (e) => {
    const btn_value = e.target.value;

    const value = btn_value.replace('#', '');

    history.push({
      pathname: '/search',
      state: { props: value },
    });
  };

  // 나머지 배너 클릭시
  const onClickBanner = () => {
    history.push({ pathname: '/recentRecipe' });
  };

  const onClickBanner_tip = () => {
    history.push({ pathname: '/tip' });
  };

  // setState를 동기적 코드로 처리하기 위함
  const setPageNum = (param) => {
    setPage(param);
  };
  const setRun = (param) => {
    setRunning(param);
  };
  const set_sub = (param) => {
    setXPosition_sub(param);
  };
  const setPageNum_sub = (param) => {
    setPage_sub(param);
  };

  // 가장 최근 본 레시피
  let arr = getRcp();
  const mostRecent_rcp = arr[arr.length - 1];

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
          <div className={style.mainSlide} style={{ background: `url(${main07}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide} ref={(elem) => (mainSlideRef.current[0] = elem)}></div>
          <div className={style.mainSlide_on} style={{ background: `url(${main01}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide} ref={(elem) => (mainSlideRef.current[1] = elem)}>
            <div>
              <MainSlideExp keyTop={'간편하지만 정성스러운 한끼!'} keyMiddle={'갓 지은 솥밥으로'} keyBottom={'맛있고 든든하게 영양 챙기기'} hashBtn={['#채식', '#카레토마토솥밥']} mainBtn={'레시피 바로 보기'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main02}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide} ref={(elem) => (mainSlideRef.current[2] = elem)}>
            <div>
              <MainSlideExp keyTop={'빠르고 간편하게'} keyMiddle={'하지만 맛은 최고!'} keyBottom={'10분 내로~ 스피드 레시피'} hashBtn={['#XO만두', '#떡만둣국', '#뜨끈한국물']} mainBtn={'스피드 테마 보기'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main03}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide} ref={(elem) => (mainSlideRef.current[3] = elem)}>
            <div>
              <MainSlideExp keyTop={'쉽고 빠르게'} keyMiddle={'따라 할 수 있는!'} keyBottom={'새내기 요리사 초보 레시피'} hashBtn={['#토마토 냉파스타', '#에그마요 샌드위치']} mainBtn={'왕초보 테마 보기'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main04}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide} ref={(elem) => (mainSlideRef.current[4] = elem)}>
            <div>
              <MainSlideExp keyTop={'오뚜기 간편식'} keyMiddle={'요리가 되는 팁!'} keyBottom={'요리의 업그레이드 셰프의 팁'} hashBtn={['#얼큰한', '#열라면', '#순두부열라면']} mainBtn={'셰프의 팁 테마 보기'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main05}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide} ref={(elem) => (mainSlideRef.current[5] = elem)}>
            <div>
              <MainSlideExp keyTop={'향신료의 매력에'} keyMiddle={'푹 빠지고 싶다면?'} keyBottom={'허브·스파이스 전문 도서관 라이브러리 H'} hashBtn={['#채식', '#카레토마토솥밥']} mainBtn={'자세한 이용 방법 보기'} color={'black'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main06}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide} ref={(elem) => (mainSlideRef.current[6] = elem)}>
            <div>
              <MainSlideExp keyTop={'간편하게 완성하는'} keyMiddle={'브런치 메뉴'} keyBottom={'더치베이비 펜케이크'} hashBtn={['#생일축하해', '#핫케이크']} mainBtn={'생일테마 바로가기'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main07}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide} ref={(elem) => (mainSlideRef.current[7] = elem)}></div>
          <div className={style.mainSlide} style={{ background: `url(${main01}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide} ref={(elem) => (mainSlideRef.current[8] = elem)}>
            <div>
              <MainSlideExp keyTop={'간편하지만 정성스러운 한끼!'} keyMiddle={'갓 지은 솥밥으로'} keyBottom={'맛있고 든든하게 영양 챙기기'} hashBtn={['#채식', '#카레토마토솥밥']} mainBtn={'레시피 바로 보기'} />
            </div>
          </div>
        </div>
      </div>
      {/* 인기 메뉴 */}
      <div className={style.popular}>
        <div>
          {/* 이건 어때요? 인기 검색어 */}
          <ul className={style.popular_sch}>
            <li>
              <ul>
                <li>
                  <h2>이건어때요?</h2>
                  <h2>인기검색어</h2>
                  <p>고민을 덜어주는 추천 검색어</p>
                </li>
                <li>
                  {/* 해쉬태그 버튼 */}
                  <ul className={style.hash}>
                    <li>
                      <input type="button" value="#카레" onClick={onClick} />
                    </li>
                    <li>
                      <input type="button" value="#마요네스" onClick={onClick} />
                    </li>
                    <li>
                      <input type="button" value="#분식" onClick={onClick} />
                    </li>
                    <li>
                      <input type="button" value="#브런치" onClick={onClick} />
                    </li>
                    <li>
                      <input type="button" value="#집밥" onClick={onClick} />
                    </li>
                    <li>
                      <input type="button" value="#치즈듬뿍" onClick={onClick} />
                    </li>
                    <li>
                      <input type="button" value="#캠핑" onClick={onClick} />
                    </li>
                    <li>
                      <input type="button" value="#간단 꿀조합" onClick={onClick} />
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          {/* 키즈 셰프 레시피 */}
          <ul className={style.kidsChef}>
            {/* 미니 슬라이드 */}
            <div ref={miniSlideRef} className={style.miniSlide_container}>
              {/* 미니 슬라이드 이미지 */}
              {/* 이미지3 */}
              <div className={style.miniSlide}>
                <MiniSlide name={'피자 토스트'} hash={['#피자토스트', '#피자소스', '#피자']} background={mini03} />
              </div>
              {/* 이미지1 */}
              <div className={style.miniSlide}>
                <MiniSlide name={'쨈 아이스크림'} hash={['#오뚜기쨈', '#딸기쨈', '#포도쨈']} background={mini01} />
              </div>
              {/* 이미지2 */}
              <div className={style.miniSlide}>
                <MiniSlide name={'옥수수 푸딩'} hash={['#옥수수푸딩', '#콘스프']} background={mini02} />
              </div>
              {/* 이미지3 */}
              <div className={style.miniSlide}>
                <MiniSlide name={'피자 토스트'} hash={['#피자토스트', '#피자소스', '#피자']} background={mini03} />
              </div>
              {/* 이미지1 */}
              <div className={style.miniSlide}>
                <MiniSlide name={'쨈 아이스크림'} hash={['#오뚜기쨈', '#딸기쨈', '#포도쨈']} background={mini01} />
              </div>
            </div>
            {/* 미니 슬라이드 컨트롤러 */}
            <div className={style.miniSlide_controller}>
              {/* 왼쪽버튼 */}
              <div className={style.miniSlide_arrow} onClick={onClickMiniSlideLeft}>
                <BsArrowLeft />
              </div>
              {/* 페이지 뷰 */}
              <div className={style.miniSlide_pgView} ref={pageRef_sub} value={page_sub}>
                {page_sub}/3
              </div>
              {/* 오른쪽버튼 */}
              <div className={style.miniSlide_arrow} onClick={onClickMiniSlideRight}>
                <BsArrowRight />
              </div>
            </div>
          </ul>
          {/* 최근 본 레시피 */}
          <ul className={style.recentRcp}>
            <div value="recentRecipe" onClick={onClickBanner}>
              <h2>History</h2>
              <h2>최근 본 레시피</h2>
              <p>
                최근에 본 레시피를
                <br />
                다시 찾아 볼 수 있습니다
              </p>
              {mostRecent_rcp ? (
                <div className={style.rcp_img}>
                  <img src={require(`./img/${mostRecent_rcp}.jpg`)} alt="최근 본 레시피 사진" style={{ width: '100%', height: '100%' }} />
                </div>
              ) : (
                <div className={style.rcp_img}></div>
              )}
            </div>
          </ul>
          {/* 오뚜기의 쉽고 간단한 계량 꿀팁 */}
          <ul className={style.tip}>
            <div style={{ background: `url(${tip_bg}) no-repeat`, backgroundSize: '300px 500px' }} value="tip" onClick={onClickBanner_tip}>
              <h2>
                오뚜기의
                <br />
                쉽고 간단한
                <br />
                계량 꿀팁!
              </h2>
              <p>
                밥숟가락, 종이컵으로
                <br />
                간단하고 쉽게 알려드립니다.
              </p>
            </div>
          </ul>
        </div>
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

export function MainSlideExp({ keyTop, keyMiddle, keyBottom, hashBtn, mainBtn, color }) {
  // keyBottom의 문자열을 공백으로 분리
  // 문자 덩어리의 갯수에 따라서 렌더링
  const str = keyBottom;
  const strArr = str.split(' ');

  // color 옵션이 'black' 이면 특정 컴포넌트의 색깔을 검정으로 변경
  // 검정색으로 바꿀 배열 객체
  const ref = useRef([]);

  if (color === 'black') {
    ref.current.map((ref) => (ref.style.color = '#000'));
  }

  // 해쉬버튼을 눌렀을때
  const onClickHash = (e) => {};
  // 메인버튼을 눌렀을때
  const onClickMain = (e) => {};

  return (
    <div className={style.MainSlideExp_container}>
      <div>
        {/* 키워드 상단 밑줄 */}
        <div className={style.keyTop}>
          <div>
            <h2 ref={(elem) => (ref.current[0] = elem)}>{keyTop}</h2>
          </div>
        </div>
        {/* 키워드 중간 */}
        <div className={style.keyMiddle}>
          <div>
            <p ref={(elem) => (ref.current[1] = elem)}>{keyMiddle}</p>
          </div>
        </div>
        {/* 키워드 하단 제일 큰 글씨*/}
        <div className={style.keyBottom}>
          <div>
            {/* 위에서 나눈 문자 덩어리의 갯수에 따라서 다르게 렌더링 */}
            {(() => {
              switch (strArr.length) {
                case 2: {
                  return (
                    <div>
                      <h2>{strArr[0]}</h2>
                      <h2>{strArr[1]}</h2>
                    </div>
                  );
                }
                case 3: {
                  return (
                    <div>
                      <h2>
                        {strArr[0]} {strArr[1]}
                      </h2>
                      <h2>{strArr[2]}</h2>
                    </div>
                  );
                }
                case 4: {
                  return (
                    <div>
                      <h2>
                        {strArr[0]} {strArr[1]}
                      </h2>
                      <h2>
                        {strArr[2]} {strArr[3]}
                      </h2>
                    </div>
                  );
                }
                case 5: {
                  return (
                    <div>
                      <h2 ref={(elem) => (ref.current[2] = elem)}>
                        {strArr[0]} {strArr[1]} {strArr[2]}
                      </h2>
                      <h2 ref={(elem) => (ref.current[3] = elem)}>
                        {strArr[3]} {strArr[4]}
                      </h2>
                    </div>
                  );
                }
                default: {
                  return <h2>{strArr}</h2>;
                }
              }
            })()}
          </div>
        </div>
        {/* 해쉬버튼 클릭 시 검색*/}
        <div className={style.hashBtn}>
          <div>
            <input type="button" value={hashBtn[0]} onClick={onClickHash} />
            <input type="button" value={hashBtn[1]} onClick={onClickHash} />
            {/* 세번째 태그가 있을때만 렌더링 */}
            {hashBtn[2] && <input type="button" value={hashBtn[2]} onClick={onClickHash} />}
          </div>
        </div>
        {/* 메인버튼 클릭 시 해당 카테고리 또는 링크로 이동*/}
        <div className={style.mainBtn}>
          <div>
            <input type="button" value={mainBtn} onClick={onClickMain} />
          </div>
        </div>
      </div>
    </div>
  );
}

// 미니 슬라이드 carousel 컨텐츠
export function MiniSlide({ name, hash, background }) {
  const history = useHistory();

  const onClick = () => {
    history.push({ pathname: '/detail', state: { name: name } });
  };

  return (
    <div>
      {/* 키즈셰프 레시피 */}
      <div className={style.kidsChef_Rcp}>
        <h2>kid's cooking</h2>
        <h2>키즈셰프 레시피</h2>
      </div>
      {/* 레시피 사진 */}
      <div className={style.kidsChef_img}>
        <div style={{ width: '220px', height: '220px', cursor: 'pointer' }} onClick={onClick}>
          <img src={background} alt="레시피 사진" style={{ width: '100%', height: '100%', borderRadius: '220px' }} />
        </div>
      </div>
      {/* 레시피 이름, 태그 */}
      <div className={style.kidsChef_name}>
        <div>
          {/* 이름 */}
          <h3>{name}</h3>
          {/* 태그 */}
          <p>
            {hash[0]} {hash[1]} {hash[2]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
