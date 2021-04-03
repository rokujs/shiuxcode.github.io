import React from "react";
import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Soon from "../components/Soon/Soon";

const skills = () => {
  return (
    <Layout>
      <Head>
        <title>Skills</title>
      </Head>
      <div>
        {/* <h1>Skills</h1>
        <p>This page will be in 3D</p> */}
        <Soon />
      </div>
    </Layout>
  );
};

export default skills;
