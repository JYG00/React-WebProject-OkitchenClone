import React, { useEffect, useRef, useState } from 'react';
import style from './search.module.css';
import Footer from '../footer';
import allDataList from '../component/data/allDataList';
import Food from '../component/food/food';
import { useLocation } from 'react-router';
import { BsCheck } from 'react-icons/bs';
import sch_btn from '../img/sch_btn.png';
import item_no from '../img/item_no.gif';

function Search() {
  // History로 보낸 객체를 props에 받습니다
  const location = useLocation();
  const [props, setProps] = useState('');
  const [CloneProps, setCloneProps] = useState('');

  useEffect(() => {
    setProps(location.state.props.replace('#', ''));
    setCloneProps(location.state.props.replace('#', ''));
    console.log(props);
  }, [location]);

  // 해쉬태크 버튼을 클릭하면 해당내용을 검색
  const onClick = (e) => {
    const s_value = e.target.value;
    // 버튼 앞에 #을 공백으로 대체
    const value = s_value.replace('#', '');
    setProps(value);
    setCloneProps(value);
  };

  // 검색결과가 있는지 없는지 확인
  let result = [];
  allDataList.filter((food) => food.hash.toString().includes(props) || food.name.toString().includes(props)).map((food) => result.push(food));

  // 최신순, 조회순 버튼에 따라서 해당 내용 출력
  const [recentlyViewOrder, setRecentlyViewOrder] = useState(true);

  //페이지 목록 버튼을 클릭시 이벤트 발생
  const onClick_top = (e) => {
    switch (e.target.value) {
      case '최신순':
        setRecentlyViewOrder(true);
        break;
      case '조회순':
        setRecentlyViewOrder(false);
        break;
      default:
        break;
    }
  };

  // 최신 날짜순으로 검색 단어를 정렬
  let recently_order = [];
  allDataList
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((food) => food.hash.toString().includes(props) || food.name.toString().includes(props))
    .map((food) => recently_order.push(food));
  // console.log(recently_order);

  // 조회순으로 검색 단어를 정렬
  let view_order = [];
  allDataList
    .sort((a, b) => b.view - a.view)
    .filter((food) => food.hash.toString().includes(props) || food.name.toString().includes(props))
    .map((food) => view_order.push(food));

  // 두번째 검색란 input 객체
  const inputRef = useRef();

  const onChange = (e) => {
    setCloneProps(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setProps(inputRef.current.value);
  };

  return (
    <div>
      <div className={style.issue}>
        <div className={style.issue_bar}>
          <div>
            <form onSubmit={onSubmit} className={style.second_sch}>
              <input type="text" value={CloneProps} onChange={onChange} ref={inputRef} />
              <button type="submit">
                <img src={sch_btn} alt="검색 버튼" />
              </button>
            </form>
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
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.content_in}>
          <div className={style.sch_result}>
            <h2>
              {props} <span>검색결과</span>
            </h2>
          </div>
          <div className={style.content_switch}>
            <div>
              {recentlyViewOrder === true ? (
                <>
                  <p>
                    검색결과 <strong>{recently_order.length}</strong>건 조회
                  </p>
                  <ul>
                    <li>
                      <BsCheck />
                      <input type="button" value="최신순" className={style.check} onClick={onClick_top} />
                    </li>
                    <li>
                      <input type="button" value="조회순" onClick={onClick_top} />
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <p>
                    검색결과 <strong>{view_order.length}</strong>건 조회
                  </p>
                  <ul>
                    <li style={{ marginRight: '12px' }}>
                      <input type="button" value="최신순" onClick={onClick_top} />
                    </li>
                    <li>
                      <BsCheck />
                      <input type="button" value="조회순" className={style.check} onClick={onClick_top} />
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
          <ul>
            {/* 기준1. 조회순? 최신순? 따라서 렌더링*/}
            {/* 기준2. 페이지 리스트에 따라서 렌더링*/}
            {recentlyViewOrder === true
              ? recently_order.map((food) => (
                  <div key={food.id}>
                    <Food id={food.id} src={food.src} hash={food.hash} name={food.name}></Food>
                  </div>
                ))
              : view_order.map((food) => (
                  <div key={food.id}>
                    <Food id={food.id} src={food.src} hash={food.hash} name={food.name}></Food>
                  </div>
                ))}
          </ul>
          {result.length === 0 && (
            <div className={style.none}>
              <div>
                <img src={item_no} alt="검색결과가 없습니다" />
                <p>검색결과가 없습니다</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Search;
