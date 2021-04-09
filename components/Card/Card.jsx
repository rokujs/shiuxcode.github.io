import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

import style from "./card.module.css";
import ItemSkill from "../ItemSkill/ItemSkill";

const Card = (props) => {
  const { image, title, technologies, link } = props;

  return (
    <div className={style.card}>
      <div className={style.buttonPage}>
        <Link href={link}>
          <a>
            <FontAwesomeIcon icon={faExpand} />
          </a>
        </Link>
      </div>
      <img
        src={image}
        alt={`cover of ${title}`}
        className={style.backgroundImage}
      />
      <div className={style.description}>
        <h3 className={style.title}>{title}</h3>
        <ul className={style.skills}>
          {technologies.map((tech, id) => (
            <ItemSkill technology={tech} key={id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
