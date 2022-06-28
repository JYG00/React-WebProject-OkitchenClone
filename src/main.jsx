import React, { useEffect, useState } from 'react';
import style from './main.module.css';
import Footer from './footer';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
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
// 미니 슬라이드(carousel) 이미지
import mini01 from './img/쨈 아이스크림.jpg';
import mini02 from './img/옥수수 푸딩.jpg';
import mini03 from './img/피자 토스트.jpg';

function Main() {
  const mainRef = useRef();
  const miniSlideRef = useRef();
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

  // 슬라이드 클릭 시
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

  // 해쉬버튼 클릭시
  const onClick = (e) => {
    const btn_value = e.target.value;

    const value = btn_value.replace('#', '');
    // console.log(value);

    history.push({
      pathname: '/search',
      state: { props: value },
    });
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
          <div className={style.mainSlide} style={{ background: `url(${main07}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide}></div>
          <div className={style.mainSlide} style={{ background: `url(${main01}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide}>
            <div>
              <MainSlideExp keyTop={'간편하지만 정성스러운 한끼!'} keyMiddle={'갓 지은 솥밥으로'} keyBottom={'맛있고 든든하게 영양 챙기기'} hashBtn={['#채식', '#카레토마토솥밥']} mainBtn={'레시피 바로 보기'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main02}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide}>
            <div>
              <MainSlideExp keyTop={'빠르고 간편하게'} keyMiddle={'하지만 맛은 최고!'} keyBottom={'10분 내로~ 스피드 레시피'} hashBtn={['#XO만두', '#떡만둣국', '#뜨끈한국물']} mainBtn={'스피드 테마 보기'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main03}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide}>
            <div>
              <MainSlideExp keyTop={'쉽고 빠르게'} keyMiddle={'따라 할 수 있는!'} keyBottom={'새내기 요리사 초보 레시피'} hashBtn={['#토마토 냉파스타', '#에그마요 샌드위치']} mainBtn={'왕초보 테마 보기'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main04}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide}>
            <div>
              <MainSlideExp keyTop={'오뚜기 간편식'} keyMiddle={'요리가 되는 팁!'} keyBottom={'요리의 업그레이드 셰프의 팁'} hashBtn={['#얼큰한', '#열라면', '#순두부열라면']} mainBtn={'셰프의 팁 테마 보기'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main05}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide}>
            <div>
              <MainSlideExp keyTop={'향신료의 매력에'} keyMiddle={'푹 빠지고 싶다면?'} keyBottom={'허브·스파이스 전문 도서관 라이브러리 H'} hashBtn={['#채식', '#카레토마토솥밥']} mainBtn={'자세한 이용 방법 보기'} color={'black'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main06}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide}>
            <div>
              <MainSlideExp keyTop={'간편하게 완성하는'} keyMiddle={'브런치 메뉴'} keyBottom={'더치베이비 펜케이크'} hashBtn={['#생일축하해', '#핫케이크']} mainBtn={'생일테마 바로가기'} />
            </div>
          </div>
          <div className={style.mainSlide} style={{ background: `url(${main07}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide}></div>
          <div className={style.mainSlide} style={{ background: `url(${main01}) no-repeat center`, backgroundSize: 'cover' }} onClick={onClickSlide}>
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
            <div ref={miniSlideRef}>
              <div className={style.miniSlide}>
                <MiniSlide name={'쨈 아이스크림'} hash={['#오뚜기쨈', '#딸기쨈', '#포도쨈']} background={mini01} />
              </div>
              <div className={style.miniSlide}>
                <MiniSlide name={'옥수수 토스트'} hash={['#옥수수푸딩', '#콘스프']} background={mini02} />
              </div>
              <div className={style.miniSlide}>
                <MiniSlide name={'피자 토스트'} hash={['#피자토스트', '#피자소스', '#피자']} background={mini03} />
              </div>
            </div>
          </ul>
          {/* 최근 본 레시피 */}
          <ul>3</ul>
          {/* 오뚜기의 쉽고 간단한 계량 꿀팁 */}
          <ul>4</ul>
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
  // 문자 덩어리의 갯수에 따라서 다르게 렌더링
  const str = keyBottom;
  const strArr = str.split(' ');

  // color 옵션이 'black' 이면 특정 컴포넌트의 색깔을 검정으로 변경
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
  console.log(background);
  return (
    <div>
      {/* 키즈셰프 레시피 */}
      <div className={style.kidsChef_Rcp}>
        <h2>kid's cooking</h2>
        <h2>키즈셰프 레시피</h2>
      </div>
      {/* 레시피 사진 */}
      <div className={style.kidsChef_img}>
        <div style={{ width: '220px', height: '220px', borderRadius: '220px' }}>
          <div style={{ background: `url(${background})`, backgroundSize: 'cover' }}></div>
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
