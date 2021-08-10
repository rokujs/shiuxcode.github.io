import React from "react"

import style from "./itemSkill.module.css"

const ItemSkill = ({ technology }) => {
  return (
    <li className={style.item}>
      <span>{technology}</span>
    </li>
  )
}

export default ItemSkill
