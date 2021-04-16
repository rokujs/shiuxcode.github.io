import React from "react";

import Item from "../ItemSkill/ItemSkill";
import style from "./itemProject.module.css";

const ItemProject = (props) => {
  const { title, image, url, tech, description } = props;
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.image}>
        <img src={image} alt={`thumbnail of ${title}`} />
      </div>
      <a href={url} target="_blank" className={style.btn}>
        <div className={style.btn_container}>
          <span className={style.btn__text}>Link</span>
        </div>
      </a>
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
  );
};

export default ItemProject;
