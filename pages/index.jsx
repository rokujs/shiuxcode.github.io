import React from "react";
import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>ShiuxCode</title>
      </Head>
      <Home />
    </Layout>
  );
};

export default HomePage;
