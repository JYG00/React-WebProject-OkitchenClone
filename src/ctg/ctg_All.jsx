import style from "./ctg_All.module.css";
import {Link} from "react-router-dom";
export default function Ctg_All(){
    return(
        <div className={style.container}>
            {/* 전체테마 */}
            <table>
                {/* 종류 */}
                <tr>
                    <th>종류</th>
                    <td>
                        <Link>밥</Link>
                        <Link>반찬</Link>
                        <Link>국물</Link>
                        <Link>면</Link>
                        <Link>디저트</Link>
                        <Link>분식</Link>
                        <Link>샐러드</Link>
                        <Link>음료</Link>
                        <Link>기타</Link>
                    </td>
                </tr>
                {/* 재료 */}
                <tr>
                    <th>재료</th>
                    <td>
                        <Link>쇠고기</Link>
                        <Link>돼지고기</Link>
                        <Link>닭고기</Link>
                        <Link>채소</Link>
                        <Link>해물</Link>
                        <Link>계란</Link>
                        <Link>유제품</Link>
                        <Link>기타</Link>
                    </td>
                </tr>
                {/* 방법 */}
                <tr>
                    <th>방법</th>
                    <td>
                    <Link>구이</Link>
                    <Link>찜</Link>
                    <Link>국탕찌개</Link>
                    <Link>볶음</Link>
                    <Link>조림</Link>
                    <Link>튀김</Link>
                    <Link>무침·비빔</Link>
                    <Link>기타</Link>
                    </td>
                </tr>
                {/* 테마 */}
                <tr>
                    <th>테마</th>
                    <td>
                        <Link>스피드</Link>
                        <Link>브런치</Link>
                        <Link>야식</Link>
                        <Link>간식</Link>
                        <Link>캠핑</Link>
                        <Link>도시락</Link>
                        <Link>파티</Link>
                        <Link>1인분</Link>
                        <Link>해장</Link>
                        <Link>키즈셰프</Link>
                        <Link>키즈푸드</Link>
                        <Link>채식</Link>
                        <Link><br/>부드러운 식감</Link>
                        <Link>셰프의 팁! 간편식 업그레이드</Link>
                        <Link>간단 꿀조합</Link>
                        <Link>다이어트</Link>
                        <Link>요린이를 위하여</Link>
                    </td>
                </tr>
                {/* 기념일 */}
                <tr>
                    <th>기념일</th>
                    <td>
                        <Link>명절</Link>
                        <Link>생일</Link>
                        <Link>카레데이</Link>
                        <Link>크리스마스</Link>
                    </td>
                </tr>
                {/* 도구 */}
                <tr>
                    <th>도구</th>
                    <td>
                        <Link>에어프라이어</Link>
                        <Link>후라이팬</Link>
                        <Link>전자레인지</Link>
                        <Link>냄비</Link>
                        <Link>오븐</Link>
                        <Link>기타</Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}