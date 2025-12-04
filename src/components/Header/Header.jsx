import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.badge}>
        <img src={Logo} alt="logo" />
        <span>SoundInfluencers</span>
      </div>
      <nav className={s.nav}>
        <NavLink to="/loader" className={s.link}>
          Loader
        </NavLink>

        <NavLink to="/glass" className={s.link}>
          Glass
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
