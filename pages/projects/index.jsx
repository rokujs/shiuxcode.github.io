import React from 'react'
import Head from 'next/head'
import Error from 'next/error'
import Fetch from 'isomorphic-unfetch'

import Layout from 'components/Layout'
import Portfolio from 'components/Portfolio'

export const getStaticProps = async () => {
  const resProjects = await Fetch(
    'https://ancient-thicket-10868.herokuapp.com/projects'
  )
  const resSkills = await Fetch(
    'https://ancient-thicket-10868.herokuapp.com/skills'
  )

  const errorCodeProjects = resProjects.ok ? false : resProjects.statusCode
  const errorCodeSkills = resSkills.ok ? false : resSkills.statusCode

  const dataProjects = await resProjects.json()
  const dataSkills = await resSkills.json()

  // Creat technologies array from skills
  const technologies = dataSkills
    .map(({ technologies }) =>
      technologies.map(({ name, color }) => {
        const data = { name, color }
        return data
      })
    )
    .reduce((acc, curr) => acc.concat(curr), [])

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
