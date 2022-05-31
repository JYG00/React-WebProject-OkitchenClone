import "./food.css";

export default function Food({ id, src, hash, name }) {
  return (
    <div className="container">
      <img src={src} alt="foodImg" />
      <div>
        <p style={{ paddingTop: "8%", width: "100%", height: "20%" }}>
          <span>{hash[0]}</span>
          <span>{hash[1]}</span>
          <span>{hash[2]}</span>
        </p>
        <h4 style={{ width: "100%", height: "20%" }}>{name}</h4>
      </div>
    </div>
  );
}
