import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ItemProject from 'components/ItemProject/'
import Layout from 'components/Layout'

const ProjectPage = () => {
  const { query } = useRouter()
  const [project, setProject] = useState(null)
  console.log(query)
  useEffect(() => {
    if (query.id) {
      fetch(`https://ancient-thicket-10868.herokuapp.com/projects/${query.id}`)
        .then((res) => res.json())
        .then((data) => setProject(data))
        .catch((err) => console.error(err))
    }
  }, [query.id])

  return (
    <Layout>
      {project && (
        <>
          <Head>
            <title>{project.title}</title>
          </Head>
          <ItemProject
            title={project.title}
            images={project.images}
            url={project.link}
            tech={project.technologies}
            description={project.description}
            codeUrl={project.code}
            colorBg={project.colorBg}
          />
        </>
      )}
    </Layout>
  )
}

export default ProjectPage
