import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wave}>
        <span className={`${s.bar} ${s.bar1}`} />
        <span className={`${s.bar} ${s.bar2}`} />
        <span className={`${s.bar} ${s.bar3}`} />
        <span className={`${s.bar} ${s.bar4}`} />
        <span className={`${s.bar} ${s.bar5}`} />
        <span className={`${s.bar} ${s.bar6}`} />
        <span className={`${s.bar} ${s.bar7}`} />
        <span className={`${s.bar} ${s.bar8}`} />
        <span className={`${s.bar} ${s.bar9}`} />
      </div>
    </div>
  );
};

export default Loader;
