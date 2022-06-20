import { useHistory } from 'react-router-dom';
import style from './food.module.css';

export default function Food({ id, src, hash, name }) {
  const history = useHistory();

  const onClick = (e) => {
    history.push({ pathname: '/detail', state: { name: name } });
  };

  return (
    <div className={style.container} id={id}>
      <div className={style.imageBox}>
        <img src={src} alt="foodImg" onClick={onClick} />
      </div>
      <div className={style.content}>
        <p>
          <span>{hash[0]}</span>
          <span>{hash[1]}</span>
          <span>{hash[2]}</span>
        </p>
        <h4>{name}</h4>
      </div>
    </div>
  );
}
