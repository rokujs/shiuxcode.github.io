import Head from 'next/head'

import Layout from 'components/Layout'
import Contact from 'components/Contact'

function contact () {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <Contact/>
    </Layout>
  )
}

export default contact
