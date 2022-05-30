import React from "react";
import { Route, Link } from "react-router-dom";
// yarn add react-router-dom@5
import "./App.css";
import Main from "./main";
import Tip from "./tip/tip";
import New from "./new/new";
import Issue from "./issue/issue";
import { CgMenuRound } from "react-icons/cg";
import { RiShoppingBasket2Line, RiFileCopyFill } from "react-icons/ri";
import logo from "./img/logo.png";
import top_sch from "./img/top_sch.png";
function App() {
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
                <input
                  type="text"
                  maxLength="30"
                  placeholder="오뚜기 제품, 요리명 등 다양하게 검색해보세요! (예: 카레)"
                />
                <label>
                  <img src={top_sch} alt="검색 이미지"></img>
                </label>
              </div>
              {/* 서치 옆 해쉬태그 */}
              <div className="hash">
                <ul>
                  <li>
                    <Link to="/ramen">#라면맛집</Link>
                  </li>
                  <li>
                    <Link to="/xo">#XO만두</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header_in_bottom">
            {/* 네브 왼쪽 영역*/}
            <div className="nav">
              <ul>
                <li>
                  <CgMenuRound style={{ fontSize: "35px", color: "#bf132b" }} />
                </li>
                <li>
                  <Link
                    to="/"
                    style={{
                      borderRight: "1px solid #666",
                      paddingRight: "20px",
                    }}
                  >
                    카테고리
                  </Link>
                </li>
                <li>
                  <Link to="/issue/recentlyorder">인기 레시피</Link>
                </li>
                <li style={{ marginRight: "3%" }}>
                  <Link
                    to="/new"
                    style={{
                      borderRight: "1px solid #666",
                      paddingRight: "20px",
                    }}
                  >
                    신규 레시피
                  </Link>
                </li>
                <li>
                  <Link to="/tip" style={{ color: "#f64646" }}>
                    계랑 팁
                  </Link>
                </li>
              </ul>
            </div>
            {/* 네브 오른쪽 영역*/}
            <div className="nav2">
              <ul>
                {/* <li style={{ marginLeft: "3%", paddingTop: "6%" }}>
                  
                </li> */}
                <li>
                  <a href="" target="_blank">
                    <RiShoppingBasket2Line />
                    오뚜기몰
                  </a>
                </li>
                {/* <li style={{ marginLeft: "3%", paddingTop: "6%" }}>
                  
                </li> */}
                <li>
                  <Link to="/recently">
                    <RiFileCopyFill />
                    최근 본 레시피
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "auto", background: "#ccc" }}>
        <Route path="/" exact={true} component={Main}></Route>
        <Route path="/issue" component={Issue}></Route>
        <Route path="/new" component={New}></Route>
        <Route path="/tip" component={Tip}></Route>
      </div>
    </div>
  );
}

export default App;
