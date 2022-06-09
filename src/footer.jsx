import React, { useRef } from "react";
import style from "./footer.module.css";
import { Route, Link } from "react-router-dom";
// yarn add react-router-dom@5;
// yarn add react-icons;
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
function Footer() {
  const ref = useRef();

  return (
    <div className={style.footer}>
      <div>
        {/* footer 상단 */}
        <div className={style.footer_top}>
          <ul>
            <li>
              <Link to="/issue/recentlyorder">인기 레시피</Link>
            </li>
            <li>
              <Link to="/chef">셰프의 팁</Link>
            </li>
            <li>
              <Link to="/new">신규 레시피</Link>
            </li>
          </ul>
        </div>
        {/* footer 하단 */}
        <div className={style.footer_bottom}>
          <ul>
            {/* 기타 정보 */}
            <li>
              <div>
                <ul className={style.footer_bottom_etc}>
                  <li>
                    <p style={{ fontSize: "20px" }}>(주)오뚜기</p>
                  </li>
                  <li>
                    <p>경기도 안양시 동안구 흥안대로 405</p>
                  </li>
                  <li>
                    <p>Copyright ⓒ ottogi co.,Ltd All Rights Reserved.</p>
                  </li>
                </ul>
              </div>
            </li>
            {/* 블로그, 페이스북, 인스타그램 */}
            <li className={style.sns}>
              <div>
                <ul>
                  {/* 리스트 */}
                  <li className={style.list}>
                    <select>
                      <option value="0">FAMILY SITE</option>
                      <option value="http://www.naver.com">(주)오뚜기</option>
                      <option value="http://www.google.com">오뚜기몰</option>
                      <option value="http://www.daum.net">
                        오뚜기함태호재단
                      </option>
                    </select>
                  </li>
                  {/* SNS 로고 */}
                  <li className={style.sns_logo}>
                    <BsInstagram />
                  </li>
                  <li className={style.sns_logo}>
                    <FaFacebookF></FaFacebookF>
                  </li>
                  <li className={style.sns_logo}>
                    <BsYoutube />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
