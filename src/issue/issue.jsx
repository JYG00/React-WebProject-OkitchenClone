import React from "react";
import style from "./issue.module.css";
import Footer from "../footer";
import IssuePage from "./issuePage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Issue() {
  const history = useHistory();

  const onClick = (e) => {
    const btn_value = e.target.value;

    const value = btn_value.replace("#", "");
    // console.log(value);

    history.push({
      pathname: "/search",
      state: { props: value },
    });
  };

  return (
    <div>
      <div className={style.issue}>
        <div className={style.issue_bar}>
          <div>
            <h2 style={{ fontSize: "45px", color: "#333" }}>인기레시피</h2>
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
      <IssuePage />
      <Footer></Footer>
    </div>
  );
}

export default Issue;
