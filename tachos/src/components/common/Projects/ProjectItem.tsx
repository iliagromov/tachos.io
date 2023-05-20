import React, { FC } from 'react';

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import './Projects.sass';


export type ProjectItemProps = {
    imgSrc: any
    video?: string
    date: string
    title: string
    subtitle: string
    description: string
}

const ProjectItem: FC<ProjectItemProps> = (props) => {

    //   const { 
    //     mainSlogan
    //   } = useStaticQuery(graphql`
    //     query  {
    //       mainSlogan: file(relativePath: { eq: "Main-slogan.svg" }) {
    //           publicURL
    //           name
    //       }
    //     }`);

    const {
        imgSrc,
        date,
        title,
        subtitle,
        description
    } = props;
    
    const image = getImage(imgSrc);
    return (
        <a className="project-card" href="">
            <div className="project-card__img">
                <GatsbyImage image={image} alt={'img'} />
                {/* <picture className="page-picture">
                    <img src="assets/images/png/project-1.png" alt="Хайс банк"/>
                </picture> */}
            </div>
            <div className="project-card__text">
                <div className="project-card__title-box">
                    <div className="project-card__title">
                        <div className="page-title page-title-h2">Хайс банк</div>
                        <div className="project-card__date">
                            <div className="page-title-caption-4">2022</div>
                        </div>
                    </div>
                    <div className="project-card__subtitle">
                        <div className="page-title-caption page-title-caption-3">Edtech - Swift – 6 month</div>
                    </div>
                </div>
                <div className="project-card__description">
                    <div className="page-text">EdTech platform which makes online learning engrossing.</div>
                </div>
            </div>
        </a>

    );
}


export { ProjectItem };

