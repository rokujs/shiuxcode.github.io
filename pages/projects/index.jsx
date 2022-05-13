import React from 'react'
import Head from 'next/head'
import Error from 'next/error'

import Layout from 'components/Layout'
import Portfolio from 'components/Portfolio'
import getTechnologies from 'services/getTechnologies'

export const getStaticProps = async () => {
  const { errorCodeProjects, errorCodeSkills, technologies, dataProjects } =
    await getTechnologies()

  return {
    props: {
      projects: dataProjects,
      skills: technologies,
      error: errorCodeProjects || errorCodeSkills
    }
  }
}

const projects = ({ projects, skills, error }) => {
  if (error) {
    return <Error statusCode={error} />
  }

  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Portfolio projects={projects} skills={skills} />
    </Layout>
  )
}

export default projects
