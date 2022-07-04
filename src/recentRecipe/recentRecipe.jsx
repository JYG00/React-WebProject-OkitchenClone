import style from './recentRecipe.module.css';
import allDataList from '../data/allDataList';
import Food from '../component/food/food';
import Footer from '../footer';
import item_no from '../img/item_no.gif';
import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function RecentRecipe() {
  const history = useHistory();
  const location = useLocation();
  const foodArray = [...allDataList];

  // 최근 레시피가 담길 배열
  let recentRecipe = [];

  // 넘겨받은 단어로 데이터를 찾고 recentRecipe 배열에 담습니다
  location.state.array.map((name) => foodArray.filter((food) => food.name.includes(name)).map((food) => recentRecipe.push(food)));

  recentRecipe.reverse();

  const onClick = () => {
    history.push({ pathname: '/recentRecipe', state: { array: location.state.array } });
  };

  return (
    <div className={style.container}>
      <div className={style.recent}>
        {/* 최근 본 레시피*/}
        <div className={style.recent_bar}>
          <div className={style.now_page}>
            <Link to="/">홈</Link>
            <input onClick={onClick} type="button" value="최근 본 레시피" />
          </div>
          <div>
            <h2>최근 본 레시피</h2>
          </div>
        </div>
        {/* 최근 본 레시피 내용,사진 */}
        <div className={style.content}>
          <ul className={style.content_in}>
            {recentRecipe.length !== 0 &&
              recentRecipe.map((food) => (
                <li key={food.id}>
                  <Food id={food.id} src={food.src} hash={food.hash} name={food.name}></Food>
                </li>
              ))}
          </ul>
        </div>
        <div className={style.recipe_none}>
          {recentRecipe.length === 0 && (
            <div className={style.none}>
              <div>
                <img src={item_no} alt="최근 본 레시피가 없습니다" />
                <p>최근 본 레시피가 없습니다</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
