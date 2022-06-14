import style from "./ctg.module.css";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../footer";
import CtgAll from "./ctgAll";


export default function Ctg(){

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

    return(
        <div>
            <div className={style.ctg}>
                <div className={style.ctg_bar}>
                    <div>
                        <h2 style={{ fontSize: "45px", color: "#333" }}>오'키친 레시피 카테고리</h2>
                        <h2 style={{ fontSize: "30px", color: "#f64646" }}>오뚜기가 제안하고 맛있는 건강한 요리</h2>
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
            
            <div>
                <Route path="/ctg/all" component={CtgAll}></Route>
            </div>
            <Footer></Footer>
        </div>
    );
}