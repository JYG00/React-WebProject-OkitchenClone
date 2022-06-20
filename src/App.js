import React, { useRef } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
// yarn add react-router-dom@5
import './App.css';
import Main from './main';
import Tip from './tip/tip';
import New from './new/new';
import Issue from './issue/issue';
import Search from './search/search';
import Ctg from './ctg/ctg';
import Detail from './detail/detail';
import { RiShoppingBasket2Line, RiFileCopyFill } from 'react-icons/ri';
import logo from './img/logo.png';
import top_sch from './img/top_sch.png';
import { HiPlusCircle } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';

function App() {
  // input 객체 (검색창)
  const inputRef = useRef();

  const history = useHistory();

  // form 태그 내용을 받아서 state 에 저장
  const onSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/search',
      state: { props: inputRef.current.value },
    });
    inputRef.current.value = '';
  };

  // 해쉬태그 클릭시 해당 내용을 /search 로 전송
  const onClick = (e) => {
    let btn_value = e.target.value;
    let value = '';

    switch (btn_value) {
      case '#라면맛집':
        value = '라면';
        break;
      case '#XO만두':
        value = '만두';
        break;
      default:
        value = e.currentTarget.getAttribute('value');
        break;
    }

    history.push({
      pathname: '/search',
      state: { props: value },
    });
  };

  // 카테고리 리스트 클릭시
  const onClickCtg = (e) => {
    console.log(e.currentTarget.id);
    const type = e.currentTarget.id;
    history.push({
      pathname: '/ctg',
      state: { type: type },
    });
  };

  return (
    <div>
      {/* 헤더*/}
      <div className="header">
        <div className="header_in">
          <div className="header_in_top">
            {/* 로고 */}
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="로고"></img>
              </Link>
            </div>
            {/* 서치 */}
            <div className="search">
              <div className="search_bar">
                <form onSubmit={onSubmit}>
                  <input type="text" maxLength="30" ref={inputRef} placeholder="오뚜기 제품, 요리명 등 다양하게 검색해보세요! (예: 카레)" />
                  <label htmlFor="search">
                    <button className="sch_btn" type="submit">
                      <img src={top_sch} alt="검색 이미지"></img>
                    </button>
                  </label>
                </form>
              </div>
              {/* 서치 옆 해쉬태그 */}
              <div className="hash">
                <ul>
                  <li>
                    <input type="button" value="#라면맛집" onClick={onClick} />
                  </li>
                  <li>
                    <input type="button" value="#XO만두" onClick={onClick} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_b">
        <div className="header_in_bottom">
          {/* 네브 왼쪽 영역*/}
          <div className="nav">
            <ul>
              <li>
                <p
                  style={{
                    padding: '1px',
                    width: '30px',
                    height: '30px',
                    fontSize: '22px',
                    color: '#fff',
                    backgroundColor: '#bf132b',
                    borderRadius: '50px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GiHamburgerMenu />
                </p>
              </li>
              <li>
                <div
                  className="ctg"
                  style={{
                    borderRight: '1px solid #666',
                    paddingRight: '20px',
                  }}
                >
                  카테고리
                </div>
                {/* 카테고리에 마우스를 올렸을때 */}
                <div className="ctg_hover">
                  <div className="ctg_list">
                    <ul className="theme">
                      <li onClick={onClickCtg} id="kind">
                        종류
                      </li>
                      <li onClick={onClickCtg} id="material">
                        재료
                      </li>
                      <li onClick={onClickCtg} id="way">
                        방법
                      </li>
                      <li onClick={onClickCtg} id="theme">
                        테마
                      </li>
                      <li onClick={onClickCtg} id="anniversary">
                        기념일
                      </li>
                      <li onClick={onClickCtg} id="tool">
                        도구
                      </li>
                    </ul>
                    <ul className="hash_sch">
                      <li onClick={onClick} value="카레">
                        #카레
                      </li>
                      <li onClick={onClick} value="마요네스">
                        #마요네스
                      </li>
                      <li onClick={onClick} value="분식">
                        #분식
                      </li>
                      <li onClick={onClick} value="브런치">
                        #브런치
                      </li>
                      <li onClick={onClick} value="집밥">
                        #집밥
                      </li>
                      <li onClick={onClick} value="치즈듬뿍">
                        #치즈듬뿍
                      </li>
                      <li onClick={onClick} value="캠핑">
                        #캠핑
                      </li>
                      <li onClick={onClick} value="간단 꿀조합">
                        #간단 꿀조합
                      </li>
                    </ul>
                  </div>
                  <div className="ctg_all" onClick={onClickCtg} id="all">
                    <HiPlusCircle style={{ color: '#f64646' }} />
                    <span>카테고리 전체보기</span>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/issue">인기 레시피</Link>
              </li>
              <li style={{ marginRight: '3%' }}>
                <Link
                  to="/new"
                  style={{
                    borderRight: '1px solid #666',
                    paddingRight: '20px',
                  }}
                >
                  신규 레시피
                </Link>
              </li>
              <li>
                <Link to="/tip" style={{ color: '#f64646' }}>
                  계랑 팁
                </Link>
              </li>
            </ul>
          </div>
          {/* 네브 오른쪽 영역*/}
          <div className="nav2">
            <ul>
              <li>
                <a href="/" target="_blank">
                  <div>
                    <RiShoppingBasket2Line />
                  </div>
                  <div>
                    <p>오뚜기몰</p>
                  </div>
                </a>
              </li>
              <li>
                <Link to="/recently">
                  <div>
                    <RiFileCopyFill />
                  </div>
                  <div>
                    <p>최근 본 레시피</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', height: 'auto', background: '#ccc' }}>
        <Route path="/" exact={true} component={Main}></Route>
        <Route path="/issue" component={Issue}></Route>
        <Route path="/new" component={New}></Route>
        <Route path="/tip" component={Tip}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/ctg" component={Ctg}></Route>
        <Route path="/detail" component={Detail}></Route>
      </div>
    </div>
  );
}

export default App;
