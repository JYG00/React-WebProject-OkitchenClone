import style from "./ingredient.module.css";

export default function Ingredient({ id, text, src }) {
  return (
    <div className={style.container}>
      <img src={src} alt="ingredientImg" />
      <div>
        <h5>{text}</h5>
      </div>
    </div>
  );
}
