import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
// import Image from "next/image";

import style from './styles.module.css'
import ItemSkill from '../ItemSkill'

function Card ({ images, title, technologies, id }) {
  return (
    <div className={style.card}>
      <header className={style.header}>
        <div className={style.buttonPage}>
          <Link href={`/projects/${id}`}>
            <a>
              <FontAwesomeIcon icon={faExpand} />
            </a>
          </Link>
        </div>
        <div className={style.title}>
          <h3>{title}</h3>
        </div>
      </header>
      <img
        src={images[0]}
        alt={`cover of ${title}`}
        className={style.backgroundImage}
      />
      <div className={style.description}>
        <ul className={style.skills}>
          {technologies.map((tech, id) => (
            <ItemSkill technology={tech} key={id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card
