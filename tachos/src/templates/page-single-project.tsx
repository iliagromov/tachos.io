import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import { ProjectPageContainer } from "../components/containers/ProjectPage/ProjectPage";



const ProjectPage: React.FC<PageProps> = (props) => {
  
  return (
    <Layout>

      <SEO title="Tachos project" />
      <ProjectPageContainer/>
    </Layout>
  )
}

export default ProjectPage;

