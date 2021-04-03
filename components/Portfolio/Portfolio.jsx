import React from "react";

import Card from "../Card/Card";
import style from "./portfolio.module.css";

const Portfolio = () => {
  const technologies = ["HTML", "JS"];
  const title = "Name Project";
  const image =
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D/";

  const image2 =
    "https://images.unsplash.com/photo-1597809259188-0e5ffcbb0ba9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D/";

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
        <Card technologies={technologies} title={title} image={image} />
        <Card technologies={technologies} title={title} image={image2} />
        <Card technologies={technologies} title={title} image={image} />
        <Card technologies={technologies} title={title} image={image2} />
        <Card technologies={technologies} title={title} image={image} />
      </div>
    </div>
  );
};

export default Portfolio;
