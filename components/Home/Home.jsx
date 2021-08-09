import React from "react";

import style from "./home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <h1 className={style.container__home}>
        Hola, mi nombre es
        <strong className={style.title}>
          <span className={style.first__j}>J</span>
          <span className={style.first__name}>airo </span>
          <span className={style.second__s}>S</span>
          <span className={style.second__name}>ebastian</span>
        </strong>
      </h1>
      <h3 className={style.description}>
        Soy un game developer / front-end developer.
      </h3>
    </div>
  );
};

export default Home;
