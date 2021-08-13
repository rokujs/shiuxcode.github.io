import React from 'react'
import Head from 'next/head'

import Layout from 'components/Layout'
import Home from 'components/Home'
import Navbar from 'components/Navbar'

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>roku js</title>
      </Head>

      <Navbar />
      <Home />
    </Layout>
  )
}

export default HomePage
