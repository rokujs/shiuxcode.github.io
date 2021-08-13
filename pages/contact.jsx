import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import Form from '../components/Form'

function contact () {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <Form />
    </Layout>
  )
}

export default contact
