import React, { useRef } from "react";
import style from "./issue.module.css";
import { Route, Link } from "react-router-dom";
import Footer from "../footer";
import { RecentlyOrder, Page1, Page2 } from "./recentlyorder";
import { ViewOrder, Page3, Page4 } from "./vieworder";

function Issue() {
  return (
    <div>
      <div className={style.issue}>
        <div className={style.issue_bar}>
          <div>
            <h2 style={{ fontSize: "45px", color: "#333" }}>인기레시피</h2>
            <ul className={style.hash}>
              <li>
                <Link to="">#카레</Link>
              </li>
              <li>
                <Link to="">#마요네스</Link>
              </li>
              <li>
                <Link to="">#분식</Link>
              </li>
              <li>
                <Link to="">#브런치</Link>
              </li>
              <li>
                <Link to="">#집밥</Link>
              </li>
              <li>
                <Link to="">#치즈듬뿍</Link>
              </li>
              <li>
                <Link to="">#캠핑</Link>
              </li>
              <li>
                <Link to="">#간단 꿀조합</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Route path="/issue/recentlyorder" component={RecentlyOrder}></Route>
        <Route path="/issue/vieworder" component={ViewOrder}></Route>
        <Route path="/issue/recentlyorder1" component={Page1}></Route>
        <Route path="/issue/recentlyorder2" component={Page2}></Route>
        <Route path="/issue/vieworder1" component={Page3}></Route>
        <Route path="/issue/vieworder2" component={Page4}></Route>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Issue;
