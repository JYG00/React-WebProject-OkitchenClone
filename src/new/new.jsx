import React from "react";
import style from "./new.module.css";
import Footer from "../footer";
function Tip() {
  return (
    <div>
      <div className={style.new}>
        {/* 신규레시피 메뉴바 */}
        <div className={style.new_bar}>
          <h2>신규레시피</h2>
        </div>
        {/* 신규레시피 내용,사진 */}
        <div className={style.content}>
          <div className={style.content_in}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Tip;
