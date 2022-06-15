import { useRef, useEffect } from "react";
import style from "./ctg_All.module.css";
import Ctg_content from "./ctg_content";

export default function Ctg_All({ type }) {
  console.log("최종" + type);

  // tabel 객체
  const tableRef = useRef();

  // tr 객체 (카테고리)
  const trRef = useRef([]);

  useEffect(() => {
    trRef.current.map((ref) => (ref.style = "display:inlineBlock"));

    if (type === "all") {
      return;
    }

    trRef.current
      .filter((ref) => ref.getAttribute("value") !== type)
      .map((ref) => (ref.style = "display:none"));
  }, [type]);

  const onClick = (e) => {
    console.log(e.currentTarget.innerText);
  };

  return (
    <div className={style.container}>
      {/* 전체 카테고리 */}
      <table ref={tableRef}>
        <tbody>
          {/* 종류 */}
          <tr ref={(elem) => (trRef.current[0] = elem)} value="kind">
            <th>종류</th>
            <td>
              <button onClick={onClick}>밥</button>
              <button>반찬</button>
              <button>국물</button>
              <button>면</button>
              <button>디저트</button>
              <button>분식</button>
              <button>샐러드</button>
              <button>음료</button>
              <button>기타</button>
            </td>
          </tr>
          {/* 재료 */}
          <tr ref={(elem) => (trRef.current[1] = elem)} value="material">
            <th>재료</th>
            <td>
              <button>쇠고기</button>
              <button>돼지고기</button>
              <button>닭고기</button>
              <button>채소</button>
              <button>해물</button>
              <button>계란</button>
              <button>유제품</button>
              <button>기타</button>
            </td>
          </tr>
          {/* 방법 */}
          <tr ref={(elem) => (trRef.current[2] = elem)} value="way">
            <th>방법</th>
            <td>
              <button>구이</button>
              <button>찜</button>
              <button>국탕찌개</button>
              <button>볶음</button>
              <button>조림</button>
              <button>튀김</button>
              <button>무침·비빔</button>
              <button>기타</button>
            </td>
          </tr>
          {/* 테마 */}
          <tr ref={(elem) => (trRef.current[3] = elem)} value="theme">
            <th>테마</th>
            <td>
              <button>스피드</button>
              <button>브런치</button>
              <button>야식</button>
              <button>간식</button>
              <button>캠핑</button>
              <button>도시락</button>
              <button>파티</button>
              <button>1인분</button>
              <button>해장</button>
              <button>키즈셰프</button>
              <button>키즈푸드</button>
              <button>채식</button>
              <button>부드러운 식감</button>
              <button>셰프의 팁! 간편식 업그레이드</button>
              <button>간단 꿀조합</button>
              <button>다이어트</button>
              <button>요린이를 위하여</button>
            </td>
          </tr>
          {/* 기념일 */}
          <tr ref={(elem) => (trRef.current[4] = elem)} value="anniversary">
            <th>기념일</th>
            <td>
              <button>명절</button>
              <button>생일</button>
              <button>카레데이</button>
              <button>크리스마스</button>
            </td>
          </tr>
          {/* 도구 */}
          <tr ref={(elem) => (trRef.current[5] = elem)} value="tool">
            <th>도구</th>
            <td>
              <button>에어프라이어</button>
              <button>후라이팬</button>
              <button>전자레인지</button>
              <button>냄비</button>
              <button>오븐</button>
              <button>기타</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <Ctg_content />
      </div>
    </div>
  );
}
