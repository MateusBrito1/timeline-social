import style from "./Header.module.css";

import thunderLogo from "../src/assets/relampago.png";


export function Header() {
  return (
    <header className={style.header}>
      <img src={thunderLogo} alt=" Logotipo do Relampago" />
    </header>
  );
}
