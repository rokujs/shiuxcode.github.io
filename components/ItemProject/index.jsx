import React from 'react'

import Item from 'components/ItemSkill'
import style from './styles.module.css'
import { negativeColor } from 'services/negativeColor'

function ItemProject ({ title, image, url, tech, description, codeUrl, colorBg = '#feffff' }) {
  console.log(negativeColor(colorBg))
  return (
    <>
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>

      <div className={`${style.image} image`}>
        <img src={image} alt={`thumbnail of ${title}`} />
      </div>

      <div className={style.content}>
      <div>
        <a href={url} target='_blank' className={style.btn} rel="noreferrer">
          <div className={style.btn_container}>
            <span className={style.btn__text}>Link</span>
          </div>
        </a>

        {codeUrl && (
          <a href={codeUrl} target='_blank' className={style.btn} rel="noreferrer">
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
  </div>
  <style jsx>{`
    .image {
      background-color: ${colorBg};
    }
  `}</style>
  </>
  )
}

export default ItemProject
