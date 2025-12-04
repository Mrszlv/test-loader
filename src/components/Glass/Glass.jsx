import s from "./Glass.module.scss";
import Logo from "../../assets/logo.svg";

const Glass = () => {
  return (
    <div className={s.page}>
      <div className={s.content}>
        <div className={s.text}>
          <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
          <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
          <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
        </div>
        <div className={s.glass}>
          <img src={Logo} alt="logo" />
          <span className={s.glassLabel}>SoundInfluencers</span>
        </div>
      </div>
    </div>
  );
};

export default Glass;
