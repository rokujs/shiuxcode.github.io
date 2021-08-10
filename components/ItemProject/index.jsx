import React from "react"

import Item from "../ItemSkill"
import style from "./styles.module.css"

const ItemProject = ({ title, image, url, tech, description, codeUrl }) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>

      <div className={style.image}>
        <img src={image} alt={`thumbnail of ${title}`} />
      </div>

      <div>
        <a href={url} target='_blank' className={style.btn}>
          <div className={style.btn_container}>
            <span className={style.btn__text}>Link</span>
          </div>
        </a>

        {codeUrl && (
          <a href={codeUrl} target='_blank' className={style.btn}>
            <div className={style.btn_container}>
              <span className={style.btn__code}>Code</span>
            </div>
          </a>
        )}
      </div>

      <div className={style.skills}>
        <ul className={style.skills_items}>
          {tech.map((t, id) => (
            <Item technology={t} key={id} />
          ))}
        </ul>
      </div>

      <div className={style.description}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ItemProject
