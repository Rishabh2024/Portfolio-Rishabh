import React from 'react'
import { projectData } from '../../data'
import ProjectCard from './ProjectCard'
import { Element } from 'react-scroll'

const Project = () => {
    return (
        <Element name='projects' className='p-2 sm:p-4 md:p-6 lg:p-8 bg-myWhite grid place-items-center gap-4 md:gap-6 rounded-b-3xl '>
            <h1 className='text-myBlack text-2xl md:text-4xl text-center font-semibold py-4 md:py-6'>
                My Recent Work
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 p-4 gap-6'>
                {
                    projectData.map((project, index) => <ProjectCard key={index} project={project} />)
                }
            </div>
        </Element>
    )
}

export default Project