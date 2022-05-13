import React from 'react'

import style from './styles.module.css'

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
      <p className={style.text}>
      Ingeniero de artes digitales en formación, con un gran entusiasmo por el aprendizaje autodidacta. Me desempeño como programador Front-end con gusto por aprender de manera profunda y por la resolución de retos mediante la comprensión y análisis. Me desenvuelvo de forma eficaz desarrollando la parte lógica de una plataforma web y del mismo modo, en la creación de algoritmos para videojuegos en 3D y 2D.
      </p>
    </div>
  )
}

export default Home
