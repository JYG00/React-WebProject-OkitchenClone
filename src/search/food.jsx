import style from "./food.module.css";

export default function Food({ id, src, hash, name }) {
  return (
    <div className={style.container}>
      <img src={src} alt="foodImg" />
      <div>
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
