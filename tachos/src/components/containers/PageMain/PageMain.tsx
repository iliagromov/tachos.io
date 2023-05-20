import * as React from "react";
import { Link, PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import Banner from "../../common/Banner/Banner";

const PageMain: React.FC<PageProps> = (props) => {


  return (
    <>
      <Banner/>
    </>
  )
}
export default PageMain;
