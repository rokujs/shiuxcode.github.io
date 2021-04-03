import React from "react";
import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Portfolio from "../components/Portfolio/Portfolio";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* <div>
        <div>Tic-Tac-Toe</div>
        <div>To-Do</div>
        <div>BomberMan</div>
        <div>Game card</div>
      </div> */}
      <Portfolio />
    </Layout>
  );
};

export default Projects;
