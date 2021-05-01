import React from "react";
import Head from "next/head";
import Axios from "axios";

import Layout from "../../components/Layout/Layout";
import Portfolio from "../../components/Portfolio/Portfolio";

export const getServerSideProps = async () => {
  const {
    data: { data },
  } = await Axios.get(`${process.env.API}api/projects/`);
  return {
    props: {
      projects: data,
    },
  };
};

const projects = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Portfolio projects={projects} />
    </Layout>
  );
};

export default projects;
