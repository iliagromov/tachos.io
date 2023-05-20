import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import SEO from "../components/seo"
import PageMain  from "../components/containers/PageMain/PageMain";



const IndexPage: React.FC<PageProps> = (props) => {
  
  return (
    <Layout>

      <SEO title="Tachos main" />
      <div>
        test
      </div>
      {/* <Link to="/">Russian</Link>
      <Link to="/en">English</Link> */}
     
      {/* {data.wpPage.content} */}
    </Layout>
  )
}

export default IndexPage;

