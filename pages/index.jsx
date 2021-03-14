import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <div className="container--home">
      <Head>
        <title>ShiuxCode</title>
      </Head>
      <h1 className="container__home--title">
        Hello, my name is{" "}
        <strong className="title">
          <span className="title__first--j">J</span>
          <span className="title__first--name">airo </span>
          <span className="title__second--s">S</span>
          <span className="title__second--name">ebastian</span>
        </strong>
      </h1>
      <h3 className="description">I'm game developer / front-end developer.</h3>
    </div>
  );
};

export default Home;
