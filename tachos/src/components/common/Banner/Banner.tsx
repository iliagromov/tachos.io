import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './Banner.sass';

const BannerComponent: FC = () => {
  const {
    mainSlogan
  } = useStaticQuery(graphql`
    query  {
      mainSlogan: file(relativePath: { eq: "Main-slogan.svg" }) {
          publicURL
          name
      }
    }`);

  return (
    <section className="banner">
      <div className="wrapper">
        <div className="banner-inner">
          <div className="banner__description-text">
            <h1 className="page-title page-title-h1">Студия по разработке мобильных приложениях
              делающая сложный </h1>
          </div>
          <div className="banner__description">
            <div className="banner__description-subtitle">
              <div className="page-title-caption page-title-caption-1">FrontEnd & Backend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { BannerComponent }