import React from 'react'
import Head from 'next/head'
import Fetch from 'isomorphic-unfetch'

import Layout from 'components/Layout'
import LayoutSkills from 'components/LayoutSkills'

export const getStaticProps = async () => {
  const res = await Fetch('https://ancient-thicket-10868.herokuapp.com/skills')
  const errorCode = res.ok ? false : res.statusCode
  const data = await res.json()

  console.log(data)
  const sortedData = data.map(skill => {
    const sort = skill.technologies.sort((a, b) => (parseInt(a.percentage) > b.percentage) ? -1 : 1)
    return {
      ...skill,
      technologies: sort
    }
  })

  return {
    props: {
      skills: sortedData,
      error: errorCode
    }
  }
}

function skills ({ skills }) {
  console.log(skills)
  return (
    <Layout>
      <Head>
        <title>Skills</title>
      </Head>
      <LayoutSkills skills={skills} />
    </Layout>
  )
}

export default skills
