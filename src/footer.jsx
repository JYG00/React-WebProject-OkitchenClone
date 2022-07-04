import React, { useRef } from 'react';
import style from './footer.module.css';
import { Route, Link } from 'react-router-dom';
// yarn add react-router-dom@5;
// yarn add react-icons;
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
function Footer() {
  const history = useHistory();

  // 카테고리 리스트 클릭시
  const onClickChef = (e) => {
    history.push({
      pathname: '/ctg',
      state: { type: 'chef' },
    });
  };

  // 로고 아이콘 클릭 시
  const onClickLogo = (e) => {
    history.push({ pathname: '/none', state: { key: `오키친 ${e.currentTarget.getAttribute('value')} 페이지` } });
  };

  // select 변경 시
  const onChange = (e) => {
    if (e.target.value === 'family') {
      return;
    } else {
      history.push({ pathname: '/none', state: { key: e.target.value } });
    }
  };

  return (
    <div className={style.footer}>
      <div>
        {/* footer 상단 */}
        <div className={style.footer_top}>
          <ul>
            <li>
              <Link to="/issue">인기 레시피</Link>
            </li>
            <li>
              <button onClick={onClickChef}>셰프의 팁</button>
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
                    <p style={{ fontSize: '20px' }}>(주)오뚜기</p>
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
                    <select onChange={onChange}>
                      <option value="family">FAMILY SITE</option>
                      <option value="(주)오뚜기">(주)오뚜기</option>
                      <option value="오뚜기몰">오뚜기몰</option>
                      <option value="오뚜기함태호재단">오뚜기함태호재단</option>
                    </select>
                  </li>
                  {/* SNS 로고 */}
                  <li className={style.sns_logo} onClick={onClickLogo} value="instagram">
                    <BsInstagram />
                  </li>
                  <li className={style.sns_logo} onClick={onClickLogo} value="facebook">
                    <FaFacebookF></FaFacebookF>
                  </li>
                  <li className={style.sns_logo} onClick={onClickLogo} value="youtube">
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
