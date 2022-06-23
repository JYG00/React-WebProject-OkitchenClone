import style from './detail.module.css';
import allDataList from '../data/allDataList';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../footer';

export default function Detail() {
  const location = useLocation();
  const history = useHistory();
  const arrayList = [...allDataList];
  let result = [];
  let i = 0;
  let j = 0;

  // 넘겨받은 이름을 가지고 데이터를 찾습니다
  arrayList.filter((food) => food.name.toString().includes(location.state.name)).map((food) => result.push(food));

  const onClick = (e) => {
    history.push({
      pathname: '/search',
      state: { props: e.currentTarget.value },
    });
  };

  return (
    <div className={style.container}>
      {/* 음식 상단 이미지 */}
      <div className={style.detail_top}>
        <div className={style.imageBox}>
          <img src={require(`../img/${location.state.name}.jpg`)} alt="foodImg" />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.content_in}>
          <h2>{location.state.name}</h2>
          {/* 해쉬태그 버튼 - 누르면 /search 로 이동 */}
          <div className={style.button_area}>
            {result[0].hash.map((hash) => (
              <input type="button" value={hash} key={j++} onClick={onClick}></input>
            ))}
            {/* 음식 레시피 파트 */}
            <div className={style.recipe}>
              <h2>만드는 방법</h2>
              {result[0].recipe.map((recipe) => (
                <div className={style.recipe_content} key={i}>
                  <div className={style.recipe_img}>
                    {result[0].name}의 {i + 1}번째 레시피 이미지
                  </div>
                  <h2>Step {++i}</h2>
                  <p>{recipe}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
