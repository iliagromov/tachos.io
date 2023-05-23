import React, { FC } from 'react';
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

import './Projects.sass';
import { Link, graphql, useStaticQuery } from 'gatsby';

export type ProjectItemProps = {
    category?: string
    url?: string
    image: any
    video?: string
    date: string
    title: string
    subtitle: string
    description: string
}

const ProjectItem: FC<ProjectItemProps> = (props) => {
    const {
        category,
        url,
        image,
        date,
        title,
        subtitle,
        description
    } = props;


    // const image = getImage(imgSrc);
    const projectLink = `/${category}/${url}`;
    // console.log(image);
    return (
        <Link className="project-card" to={projectLink}>
            <div className="project-card__img">
                {/* <StaticImage
                src={image}
                alt={'img'} /> */}
            </div>
            <div className="project-card__text">
                <div className="project-card__title-box">
                    <div className="project-card__title">
                        <div className="page-title page-title-h2">{title}</div>
                        <div className="project-card__date">
                            <div className="page-title-caption-4">{date}</div>
                        </div>
                    </div>
                    <div className="project-card__subtitle">
                        <div className="page-title-caption page-title-caption-3">{subtitle}</div>
                    </div>
                </div>
                <div className="project-card__description">
                    <div className="page-text">{description}</div>
                </div>
            </div>
        </Link>

    );
}


export { ProjectItem };