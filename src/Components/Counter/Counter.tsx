import { useState } from "react";
import style from "./Counter.module.css";
import mouse from "../../assets/Images/mouse.jpg";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className={style.counter}>
      <h2>This mouse has overdosed on cheese</h2>
      <h3>and needs 1000 prayers to be cured</h3>
      <img className={style.image} src={mouse} alt="sick mouse" />
      <h2>Prayers: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Pray!</button>
    </div>
  );
}
