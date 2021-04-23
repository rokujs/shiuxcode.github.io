import React from "react";
import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>roku js</title>
      </Head>

      <Navbar />
      <Home />
    </Layout>
  );
};

export default HomePage;
