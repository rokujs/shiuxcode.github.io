import React from "react";
import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Soon from "../components/Soon/Soon";

function contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        {/* <h1>Contact me</h1> */}
        {/* <p>If you wanna get in touch, send an email to shiuxcode@gmail.com</p> */}
        <Soon />
      </div>
    </Layout>
  );
}

export default contact;
