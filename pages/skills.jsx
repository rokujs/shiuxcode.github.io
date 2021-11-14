import React from 'react'
import Head from 'next/head'

import Layout from 'components/Layout'
import LayoutSkills from 'components/LayoutSkills'

const skills = () => {
  return (
    <Layout>
      <Head>
        <title>Skills</title>
      </Head>
      <LayoutSkills />
    </Layout>
  )
}

export default skills
