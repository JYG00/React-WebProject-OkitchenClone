import style from './detail.module.css';
import allDataList from '../component/data/allDataList';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useRef } from 'react';

export default function Detail() {
  const location = useLocation();
  // 스크롤이 상단으로 가도록 조정
  const topRef = useRef();
  const arrayList = [...allDataList];
  let result = [];

  arrayList.filter((food) => food.name.toString().includes(location.state.name)).map((food) => result.push(food));

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className={style.container} ref={topRef}>
      <div className={style.detail_top}>
        <div className={style.imageBox}>
          <img src={require(`../img/${location.state.name}.jpg`)} alt="foodImg" />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.content_in}>
          <h2>{location.state.name}</h2>
          <div className={style.button_area}>
            {result[0].hash.map((hash) => (
              <input type="button" value={hash}></input>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
