import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={`${style.github} ${style.item}`}>
        <a href="https://github.com/shiuxCode/" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} className={style.icon} />
          <span className={style.animation_icon}>Github</span>
        </a>
      </div>
      <div className={`${style.linkedIn} ${style.item}`}>
        <a href="https://www.linkedin.com/in/shiuxcode/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className={style.icon} />
          <span className={style.animation_icon}>LinkedIn</span>
        </a>
      </div>
      <div className={`${style.twitter} ${style.item}`}>
        <a href="https://twitter.com/shiuxCode/" target="_blank">
          <FontAwesomeIcon icon={faTwitterSquare} className={style.icon} />
          <span className={style.animation_icon}>Twitter</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
