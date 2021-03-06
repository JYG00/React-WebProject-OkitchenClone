import { useRef, useState, useEffect } from 'react';
import style from './ctgList.module.css';
import ctg_icon from '../img/ctg_icon.png';
import CtgTable from './ctgTable';
import { useHistory } from 'react-router-dom';

export default function CtgList({ type }) {
  const history = useHistory();
  const [ctg, setCtg] = useState();

  // 카테고리 리스트를 DOM을 담는 배열
  const ref = useRef([]);

  // 헤더에서 선택한 카테고리에 active 클래스 부여
  useEffect(() => {
    ref.current.map((ref) => (ref.className = ''));
    set(type);
  }, [type]);

  // 클릭 시 해당 DOM에 스타일 적용
  const onClick = (e) => {
    set(e.currentTarget.getAttribute('value'));
    history.push({ pathname: '/ctg', state: { type: e.currentTarget.getAttribute('value') } });
  };

  // 동기적 코드로 처리하기 위함
  const set = (param) => {
    setCtg(param);
  };

  // ctg(카테고리) 항목 변경 시 useEffect 호출!
  useEffect(() => {
    ref.current.map((ref) => (ref.className = ''));
    // footer '셰프의 팁'
    if (ctg === 'chef') {
      ref.current.filter((ref) => ref.getAttribute('value') === 'theme').map((ref) => (ref.className = `${style.active}`));
      return;
    } else if (ctg === 'birthday') {
      // main '생일 테마'
      ref.current.filter((ref) => ref.getAttribute('value') === 'anniversary').map((ref) => (ref.className = `${style.active}`));
      return;
    } else if (ctg === 'child') {
      // main 왕초보 (요린이를 위하여)
      ref.current.filter((ref) => ref.getAttribute('value') === 'theme').map((ref) => (ref.className = `${style.active}`));
      return;
    } else if (ctg === 'speed') {
      // main 스피드 (요린이를 위하여)
      ref.current.filter((ref) => ref.getAttribute('value') === 'theme').map((ref) => (ref.className = `${style.active}`));
      return;
    }
    ref.current.filter((ref) => ref.getAttribute('value') === ctg).map((ref) => (ref.className = `${style.active}`));
  }, [set]);

  return (
    <div className={style.container}>
      {/* ctg -> ctgList -> ctgTable -> ctgContent 구성 */}
      <div className={style.content}>
        {/* 카테고리 리스트 */}
        <div className={style.ctg_list}>
          <ul>
            <li>
              <button
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: '0px',
                }}
                onClick={onClick}
                value="all"
                ref={(elem) => (ref.current[0] = elem)}
              ></button>
              <span>전체</span>
            </li>
            <li>
              <button
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: '-98px',
                }}
                onClick={onClick}
                value="kind"
                ref={(elem) => (ref.current[1] = elem)}
              ></button>
              <span>종류</span>
            </li>
            <li>
              <button
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: '-196px',
                }}
                onClick={onClick}
                value="material"
                ref={(elem) => (ref.current[2] = elem)}
              ></button>
              <span>재료</span>
            </li>
            <li>
              <button
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: '-294px',
                }}
                onClick={onClick}
                value="way"
                ref={(elem) => (ref.current[3] = elem)}
              ></button>
              <span>방법</span>
            </li>
            <li>
              <button
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: '-392px',
                }}
                onClick={onClick}
                value="theme"
                ref={(elem) => (ref.current[4] = elem)}
              ></button>
              <span>테마</span>
            </li>
            <li>
              <button
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: '-490px',
                }}
                onClick={onClick}
                value="anniversary"
                ref={(elem) => (ref.current[5] = elem)}
              ></button>
              <span>기념일</span>
            </li>
            <li>
              <button
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${ctg_icon})`,
                  backgroundPositionX: '-588px',
                }}
                onClick={onClick}
                value="tool"
                ref={(elem) => (ref.current[6] = elem)}
              ></button>
              <span>도구</span>
            </li>
          </ul>
        </div>
        <div>
          <CtgTable type={ctg} />
        </div>
      </div>
    </div>
  );
}
