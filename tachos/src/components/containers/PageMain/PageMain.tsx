import * as React from "react";
import { Link, PageProps, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { BannerComponent } from "../../common/Banner/Banner";
import { ProjectsComponent } from "../../common/Projects/Projects";

const PageMainContainer: React.FC<PageProps> = (props) => {


  return (
    <>
      <BannerComponent />
      <ProjectsComponent />
    </>
  )
}
export { PageMainContainer };
