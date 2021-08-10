import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Soon from "../components/Soon";

const skills = () => {
  return (
    <Layout>
      <Head>
        <title>Skills</title>
      </Head>
      <div className="Skills">
        {/* <h1>Skills</h1>
        <p>This page will be in 3D</p> */}
        <Soon />
      </div>
    </Layout>
  );
};

export default skills;
