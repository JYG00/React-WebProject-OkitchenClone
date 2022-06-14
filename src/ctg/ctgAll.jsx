import style from "./ctgAll.module.css";
import ctg_icon from "../img/ctg_icon.png";
import {Route, Link} from "react-router-dom";
import Ctg_All from "./ctg_All";

export default function CtgAll(){

    return(
        <div className={style.container}>
            <div className={style.content}>
                {/* 카테고리 리스트 */}
                <div className={style.ctg_list}>
                    <ul>
                        <li><Link className={style.active} style={{display:"block",width:"100%",height:"100%",backgroundImage:`url(${ctg_icon})`,backgroundPositionX:"0px"}}></Link><span>전체</span></li>
                        <li><Link style={{display:"block",width:"100%",height:"100%",backgroundImage:`url(${ctg_icon})`,backgroundPositionX:"-98px"}}></Link><span>종류</span></li>
                        <li><Link style={{display:"block",width:"100%",height:"100%",backgroundImage:`url(${ctg_icon})`,backgroundPositionX:"-196px"}}></Link><span>재료</span></li>
                        <li><Link style={{display:"block",width:"100%",height:"100%",backgroundImage:`url(${ctg_icon})`,backgroundPositionX:"-294px"}}></Link><span>방법</span></li>
                        <li><Link style={{display:"block",width:"100%",height:"100%",backgroundImage:`url(${ctg_icon})`,backgroundPositionX:"-392px"}}></Link><span>테마</span></li>
                        <li><Link style={{display:"block",width:"100%",height:"100%",backgroundImage:`url(${ctg_icon})`,backgroundPositionX:"-490px"}}></Link><span>기념일</span></li>
                        <li><Link style={{display:"block",width:"100%",height:"100%",backgroundImage:`url(${ctg_icon})`,backgroundPositionX:"-588px"}}></Link><span>도구</span></li>
                    </ul>
                </div>
                <div>
                <Route path="/ctg/all" component={Ctg_All}></Route>
                </div>
            </div>
            
        </div>
    );
}