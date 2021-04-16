import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import ItemProject from "../../components/ItemProject/ItemProject";
import Layout from "../../components/Layout/Layout";

const ProjectPage = () => {
  const { query } = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/projects/${query.id}`)
        .then((res) => res.json())
        .then((data) => setProject(data));
    }
  }, [query.id]);
  return (
    <Layout>
      {project == null ? null : (
        <>
          <Head>
            <title>{project.title}</title>
          </Head>
          <ItemProject
            title={project.title}
            image={project.image}
            url={project.link}
            tech={project.technologies}
            description={project.description}
          />
        </>
      )}
    </Layout>
  );
};

export default ProjectPage;
