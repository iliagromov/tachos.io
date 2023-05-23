import React, { FC } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { ProjectItem, ProjectItemProps } from './ProjectItem';

import './Projects.sass';
import { getImage } from 'gatsby-plugin-image';

type ProjectsItemProps = QueryProjectItemProps[];
type QueryProjectItemProps = {
    id: string
    frontmatter: ProjectItemProps
}

const ProjectsComponent: FC = () => {
    
    const {
        allMarkdownRemark: {
            nodes
        }
    } : {
        allMarkdownRemark: { 
            nodes: ProjectsItemProps
        }
    } = useStaticQuery(graphql`
        query  {
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        category
                        url
                        image
                        video
                        date
                        title
                        subtitle
                        description
                    }
                }
            }
    }`);
    const renderProjects = nodes?.map((node: QueryProjectItemProps, i: number) => {
        const project = node.frontmatter;
        const image = getImage(project.image);
        console.log(project.image);
        return (
            <ProjectItem
                
                key={`project__${i}`}
                category={project.category}
                url={project.url}
                image={project.image}
                date={project.date}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
            />
        )
    });

    return (
        <section className="projects">
            <div className="wrapper">
                <div className="projects-inner">
                    {renderProjects}
                </div>
            </div>
        </section>

    );
}
export { ProjectsComponent };