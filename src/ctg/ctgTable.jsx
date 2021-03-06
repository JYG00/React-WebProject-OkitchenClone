import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import style from './ctgTable.module.css';
import Ctg_content from './ctg_content';

export default function CtgTable({ type }) {
  // tabel 객체
  const tableRef = useRef();

  // tr 객체 (카테고리)
  const trRef = useRef([]);

  // '테마 : 셰프의 팁 간편식 업그레이드!'
  const chefRef = useRef();

  // '테마 : 생일'
  const birthdayRef = useRef();

  // '테마 : 요린이를 위하여'
  const childRef = useRef();

  // '테마 : 스피드'
  const speedRef = useRef();

  // 카테고리 리스트가 바뀔때마다 테이블을 다르게 보여줌
  useEffect(() => {
    trRef.current.map((ref) => (ref.style = 'display:inlineBlock'));

    if (type === 'all') {
      return;
    } else if (type === 'chef') {
      // 테마 : 셰프의 팁
      set(chefRef.current.innerText);
      trRef.current.filter((ref) => ref.getAttribute('value') !== 'theme').map((ref) => (ref.style = 'display:none'));
      chefRef.current.focus();
      return;
    } else if (type === 'birthday') {
      // 기념일 : 생일
      set(birthdayRef.current.innerText);
      trRef.current.filter((ref) => ref.getAttribute('value') !== 'anniversary').map((ref) => (ref.style = 'display:none'));
      birthdayRef.current.focus();
      return;
    } else if (type === 'child') {
      // 테마 : 요린이를 위하여
      set(childRef.current.innerText);
      trRef.current.filter((ref) => ref.getAttribute('value') !== 'theme').map((ref) => (ref.style = 'display:none'));
      childRef.current.focus();
      return;
    } else if (type === 'speed') {
      // 테마 : 스피드
      set(speedRef.current.innerText);
      trRef.current.filter((ref) => ref.getAttribute('value') !== 'theme').map((ref) => (ref.style = 'display:none'));
      speedRef.current.focus();
      return;
    } else {
      trRef.current.filter((ref) => ref.getAttribute('value') !== type).map((ref) => (ref.style = 'display:none'));
    }
  }, [type]);

  // 테이블 칸을 클릭하면 해당 내용을 적용해서 ctg_content로 전달
  const [props, setProps] = useState();
  const onClick = (e) => {
    if (e.currentTarget.innerText === '기타') {
      return set(e.currentTarget.value);
    }
    set(e.currentTarget.innerText);
  };
  // 동기적 코드로 처리하기 위함
  const set = (param) => {
    setProps(param);
  };

  return (
    <div className={style.container}>
      {/* ctg -> ctgList -> ctgTable -> ctgContent 구성 */}
      {/* 전체 카테고리 */}
      <table ref={tableRef}>
        <tbody>
          {/* 종류 */}
          <tr ref={(elem) => (trRef.current[0] = elem)} value="kind">
            <th>종류</th>
            <td>
              <button onClick={onClick}>밥</button>
              <button onClick={onClick}>반찬</button>
              <button onClick={onClick}>국물</button>
              <button onClick={onClick}>면</button>
              <button onClick={onClick}>디저트</button>
              <button onClick={onClick}>분식</button>
              <button onClick={onClick}>샐러드</button>
              <button onClick={onClick}>음료</button>
              <button onClick={onClick} value="종류기타">
                기타
              </button>
            </td>
          </tr>
          {/* 재료 */}
          <tr ref={(elem) => (trRef.current[1] = elem)} value="material">
            <th>재료</th>
            <td>
              <button onClick={onClick}>쇠고기</button>
              <button onClick={onClick}>돼지고기</button>
              <button onClick={onClick}>닭고기</button>
              <button onClick={onClick}>채소</button>
              <button onClick={onClick}>해물</button>
              <button onClick={onClick}>계란</button>
              <button onClick={onClick}>유제품</button>
              <button onClick={onClick} value="재료기타">
                기타
              </button>
            </td>
          </tr>
          {/* 방법 */}
          <tr ref={(elem) => (trRef.current[2] = elem)} value="way">
            <th>방법</th>
            <td>
              <button onClick={onClick}>구이</button>
              <button onClick={onClick}>찜</button>
              <button onClick={onClick}>국탕찌개</button>
              <button onClick={onClick}>볶음</button>
              <button onClick={onClick}>조림</button>
              <button onClick={onClick}>튀김</button>
              <button onClick={onClick}>무침·비빔</button>
              <button onClick={onClick} value="방법기타">
                기타
              </button>
            </td>
          </tr>
          {/* 테마 */}
          <tr ref={(elem) => (trRef.current[3] = elem)} value="theme">
            <th>테마</th>
            <td>
              <button onClick={onClick} ref={speedRef}>
                스피드
              </button>
              <button onClick={onClick}>브런치</button>
              <button onClick={onClick}>야식</button>
              <button onClick={onClick}>간식</button>
              <button onClick={onClick}>캠핑</button>
              <button onClick={onClick}>도시락</button>
              <button onClick={onClick}>파티</button>
              <button onClick={onClick}>1인분</button>
              <button onClick={onClick}>해장</button>
              <button onClick={onClick}>키즈셰프</button>
              <button onClick={onClick}>키즈푸드</button>
              <button onClick={onClick}>채식</button>
              <button onClick={onClick}>부드러운 식감</button>
              <button onClick={onClick} ref={chefRef}>
                셰프의 팁! 간편식 업그레이드
              </button>
              <button onClick={onClick}>간단 꿀조합</button>
              <button onClick={onClick}>다이어트</button>
              <button onClick={onClick} ref={childRef}>
                요린이를 위하여
              </button>
            </td>
          </tr>
          {/* 기념일 */}
          <tr ref={(elem) => (trRef.current[4] = elem)} value="anniversary">
            <th>기념일</th>
            <td>
              <button onClick={onClick}>명절</button>
              <button onClick={onClick} ref={birthdayRef}>
                생일
              </button>
              <button onClick={onClick}>카레데이</button>
              <button onClick={onClick}>크리스마스</button>
            </td>
          </tr>
          {/* 도구 */}
          <tr ref={(elem) => (trRef.current[5] = elem)} value="tool">
            <th>도구</th>
            <td>
              <button onClick={onClick}>에어프라이어</button>
              <button onClick={onClick}>후라이팬</button>
              <button onClick={onClick}>전자레인지</button>
              <button onClick={onClick}>냄비</button>
              <button onClick={onClick}>오븐</button>
              <button onClick={onClick} value="도구기타">
                기타
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <Ctg_content props={props} />
      </div>
    </div>
  );
}
