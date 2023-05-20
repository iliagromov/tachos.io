import React, { FC } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { ProjectItem, ProjectItemProps } from './ProjectItem';

import './Projects.sass';

const ProjectsComponent: FC = () => {
     // FIXME: сделать фабрику по созданию картинок
    const {
        project1,
        project2,
        project3,
        project4,
        project5,
        project6,
        project7,
        project8,
    } = useStaticQuery(graphql`
        query  {
            project1:  file(relativePath: { eq: "project-1.png" }) {
				childImageSharp {
					gatsbyImageData(
						width: 500
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
					)
				}
			}
            project2:  file(relativePath: { eq: "project-2.png" }) {
				childImageSharp {
					gatsbyImageData(
						width: 500
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
					)
				}
			}
            project3:  file(relativePath: { eq: "project-3.png" }) {
				childImageSharp {
					gatsbyImageData(
						width: 500
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
					)
				}
			}
            project4:  file(relativePath: { eq: "project-4.png" }) {
				childImageSharp {
					gatsbyImageData(
						width: 500
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
					)
				}
			}
            project5:  file(relativePath: { eq: "project-5.png" }) {
				childImageSharp {
					gatsbyImageData(
						width: 500
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
					)
				}
			}
            project6:  file(relativePath: { eq: "project-6.png" }) {
				childImageSharp {
					gatsbyImageData(
						width: 500
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
					)
				}
			}
            project7:  file(relativePath: { eq: "project-7.png" }) {
				childImageSharp {
					gatsbyImageData(
						width: 500
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
					)
				}
			}
            project8:  file(relativePath: { eq: "project-8.png" }) {
				childImageSharp {
					gatsbyImageData(
						width: 500
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
					)
				}
			}
    }`);

    const projects = [
        {
            imgSrc: project1,
            video: '',
            date: '2022',
            title: 'Хайс банк',
            subtitle: 'Edtech - Swift – 6 month',
            description: 'EdTech platform which makes online learning engrossing.',
        },
        {
            imgSrc: project2,
            video: '',
            date: '2022',
            title: 'Docmed',
            subtitle: 'Edtech - Swift – 6 month',
            description: 'EdTech platform which makes online learning engrossing.',
        },
        {
            imgSrc: project3,
            video: '',
            date: '2022',
            title: 'Складно',
            subtitle: 'Edtech - Swift – 6 month',
            description: 'EdTech platform which makes online learning engrossing.',
        },
        {
            imgSrc: project4,
            video: '',
            date: '2022',
            title: 'Montetuning',
            subtitle: 'Edtech - Swift – 6 month',
            description: 'EdTech platform which makes online learning engrossing.',
        },
        {
            imgSrc: project5,
            video: '',
            date: '2022',
            title: 'Life',
            subtitle: 'Edtech - Swift – 6 month',
            description: 'EdTech platform which makes online learning engrossing.',
        },
        {
            imgSrc: project6,
            video: '',
            date: '2022',
            title: 'Полка',
            subtitle: 'Edtech - Swift – 6 month',
            description: 'EdTech platform which makes online learning engrossing.',
        },
        {
            imgSrc: project7,
            video: '',
            date: '2022',
            title: 'Складно',
            subtitle: 'Edtech - Swift – 6 month',
            description: 'EdTech platform which makes online learning engrossing.',
        },
        {
            imgSrc: project8,
            video: '',
            date: '2022',
            title: 'Maginary',
            subtitle: 'Edtech - Swift – 6 month',
            description: 'Иммерсивная книга-игра с волшебством внутри, Игра дня в США и многих других странах',
        },
    ];

    const renderProjects = projects.map((project: ProjectItemProps, i: number) => {
        return (
            <ProjectItem
                key={`project__${i}`}
                imgSrc={project.imgSrc}
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