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
                    <div className="banner__slogan">
                        <ReactSVG
                           
                            desc="Description"
                            evalScripts="always"
                            fallback={() => <span>Error!</span>}
                            httpRequestWithCredentials={true}
                            loading={() => <span>Loading</span>}
                            renumerateIRIElements={false}
                            title="Title"
                            useRequestCache={false}
                            wrapper="svg"
                            className="page-svg" 
                            src={mainSlogan.publicURL}/>
                        
                    </div>
                    <div className="banner__description">
                        <div className="banner__description-subtitle">
                            <div className="page-title-caption page-title-caption-1">FrontEnd & Backend</div>
                        </div>
                        <div className="banner__description-text">
                            <div className="page-text page-font_suisse-intl">Студия по разработке мобильных приложениях
                                делающая сложный </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  );
}


export { BannerComponent }