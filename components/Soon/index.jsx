import React from 'react'

import style from './styles.module.css'

const Soon = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Coming soon</h1>
      <p className={style.description}>
        This page will be ready soon, meanwhile you can explore the rest of my
        portfolio
      </p>
    </div>
  )
}

export default Soon
