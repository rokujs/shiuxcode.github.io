import React from 'react'

import style from './styles.module.css'

const ItemListSkill = ({ technology }) => {
  return (
    <li className={style.item}>
      <span>{technology}</span>
    </li>
  )
}

export default ItemListSkill
