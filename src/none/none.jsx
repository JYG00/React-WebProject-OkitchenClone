import style from './none.module.css';
import item_no from '../img/item_no.gif';
import { useHistory, useLocation } from 'react-router-dom';

// 구현하지 않은 페이지로 이동할때 None 컴포넌트를 보여줍니다
export default function None() {
  const location = useLocation();
  const history = useHistory();

  // 넘겨받은 키워드
  const keyword = location.state.key;

  // 홈으로 이동
  const onClick = () => {
    history.push('/');
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.none}>
          <div>
            <img src={item_no} alt="찾을 수 없습니다" />
            <h2>'{keyword}'</h2>
            <p>키워드로 페이지 이동을 해야하지만 구현하지 않았습니다</p>
            <p onClick={onClick}>홈으로 이동</p>
          </div>
        </div>
      </div>
    </div>
  );
}
