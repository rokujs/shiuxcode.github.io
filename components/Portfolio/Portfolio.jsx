import React from "react";

import Card from "../Card/Card";
import style from "./portfolio.module.css";

const Portfolio = (props) => {
  const { projects } = props;

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>Portfolio</h1>
        <p className={style.description}>
          My projects range from web pages made in React.js, JavaScript vanilla
          with Redux.js and Node.js, to video games made in Unity 3D. Check out
          my latest projects.
        </p>
      </div>
      <div className={style.containerCards}>
        {projects.map((pro) => (
          <Card
            key={pro.id}
            technologies={pro.technologies}
            title={pro.title}
            image={pro.image}
            link={pro.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
