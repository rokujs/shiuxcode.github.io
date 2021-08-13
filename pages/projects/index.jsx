import React from 'react'
import Head from 'next/head'
import Error from 'next/error'
import Fetch from 'isomorphic-unfetch'

import Layout from 'components/Layout'
import Portfolio from 'components/Portfolio'

export const getStaticProps = async () => {
  const res = await Fetch('https://www.rokujs.me/api/projects/')
  const errorCode = res.ok ? false : res.statusCode
  const { data } = await res.json()

  return {
    props: {
      projects: data,
      error: errorCode
    }
  }
}

const projects = ({ projects, error }) => {
  if (error) {
    return <Error statusCode={error} />
  }

  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Portfolio projects={projects} />
    </Layout>
  )
}

export default projects
