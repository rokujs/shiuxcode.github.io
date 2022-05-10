import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import style from './styles.module.css'

const Header = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
    const container = document.getElementById('menu_container')

    container.style.display = menu ? 'none' : 'flex'
  }

  return (
    <>
      <div className={style.container_button}>
        <button onClick={handleMenu} className={style.button}>
          {menu
            ? (
            <FontAwesomeIcon icon={faTimes} className={style.icon} />
              )
            : (
            <FontAwesomeIcon icon={faBars} className={style.icon} />
              )}
        </button>
      </div>

      <div id='menu_container' className={style.container}>
        <Link href='/'>
          <a className={style.image}>
            <Image src='/logo.svg' height={100} width={100} />
          </a>
        </Link>
        <nav className={style.menu}>
          <Link href='/'>
            <a>
              <span>Sobre mi</span>
            </a>
          </Link>
          <Link href='/contact'>
            <a>
              <span>Contacto</span>
            </a>
          </Link>
          <Link href='/projects'>
            <a>
              <span>Trabajos</span>
            </a>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Header
