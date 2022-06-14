import style from "./ctgAll.module.css";

export default function CtgAll(){
    return(
        <div className={style.container}>
            <div className={style.content}>
                {/* 카테고리 리스트 */}
                <div className={style.ctg_list}>
                    <ul>
                        <li>전체</li>
                        <li>종류</li>
                        <li>재료</li>
                        <li>방법</li>
                        <li>테마</li>
                        <li>기념일</li>
                        <li>도구</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}