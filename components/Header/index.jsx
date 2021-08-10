import React, { useState, useEffect } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import style from "./styles.module.css"

const Header = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
    const container = document.getElementById("menu_container")

    container.style.display = menu ? "none" : "flex"
  }

  return (
    <>
      <div className={style.container_button}>
        <button onClick={handleMenu} className={style.button}>
          {menu ? (
            <FontAwesomeIcon icon={faTimes} className={style.icon} />
          ) : (
            <FontAwesomeIcon icon={faBars} className={style.icon} />
          )}
        </button>
      </div>

      <div id='menu_container' className={style.container}>
        <nav className={style.menu}>
          <Link href='/'>
            <a>
              <div>About</div>
            </a>
          </Link>
          <Link href='/contact'>
            <a>
              <div>Contact</div>
            </a>
          </Link>
          <Link href='/skills'>
            <a>
              <div>Skills</div>
            </a>
          </Link>
          <Link href='/projects'>
            <a>
              <div>Works</div>
            </a>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Header
