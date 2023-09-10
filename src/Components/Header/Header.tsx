import panda from "../../assets/SVG/panda.svg";
import style from "./Header.module.css";

interface HeaderProps {
  firstName: string;
}

export function Header({ firstName }: HeaderProps) {
  return (
    <header>
      <div className={style.logo}>
        <img src={panda} alt="panda" />
        <h1>ZooTube</h1>
      </div>

      <div className={style.profile}>
        <h4>{firstName}</h4>
        <div className={style.profilePicture}>
          <h2>{firstName.charAt(0)}</h2>
        </div>
      </div>
    </header>
  );
}
