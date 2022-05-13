import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ItemProject from 'components/ItemProject/'
import Layout from 'components/Layout'
import Loading from 'components/Loading'

import getProject from 'services/getProject'

import styles from './styles.module.css'

const ProjectPage = () => {
  const { query } = useRouter()
  const [project, setProject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (query.id) {
      getProject(query.id)
        .then(data => {
          setProject(data[0])
          setIsLoading(false)
        })
        .catch(err => console.error(err))
    }
  }, [query.id])

  if (isLoading) {
    return (
      <>
          <Head>
            <title>{query.name ? query.name : 'rokujs'}</title>
          </Head>
          <div className={styles.contentLoading}>
            <h1 className={styles.titleLoading}>{query.name ? query.name : 'loading'}</h1>
            <Loading />
          </div>
        </>
    )
  }

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
