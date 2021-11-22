import React from 'react'

import Item from 'components/ItemSkill'
import style from './styles.module.css'
import { negativeColor } from 'utils/negativeColor'
import Carousel from 'components/Carousel'

function ItemProject ({
  title,
  images,
  url,
  tech,
  description,
  codeUrl,
  colorBg = '#feffff'
}) {
  const revColor = negativeColor(colorBg)

  console.log('tech', tech)
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>

      <div className={style.carousel}>
        <Carousel
          images={images}
          title={title}
          color={colorBg}
          revColor={revColor}
        />
      </div>

      <div className={style.content}>
        <div>
          <a href={url} target='_blank' className={style.btn} rel='noreferrer'>
            <div className={style.btn_container}>
              <span className={style.btn__text}>Link</span>
            </div>
          </a>

          {codeUrl && (
            <a
              href={codeUrl}
              target='_blank'
              className={style.btn}
              rel='noreferrer'
            >
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
  )
}

export default ItemProject
