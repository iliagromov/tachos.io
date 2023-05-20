import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import { PageMainContainer }  from "../components/containers/PageMain/PageMain";



const IndexPage: React.FC<PageProps> = (props) => {
  
  return (
    <Layout>

      <SEO title="Tachos main" />
      <PageMainContainer/>
    </Layout>
  )
}

export default IndexPage;

