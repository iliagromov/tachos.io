import React, { FC } from 'react';
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
        </a>

    );
}


export { ProjectItem };