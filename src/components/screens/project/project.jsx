import React, { useEffect, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import { projectsData } from '../../../data/projectsData'

const Project = () => {
    const { pid } = useParams()

    const [project, setProject] = useState()

    useEffect(() => {
        const proj = projectsData.find(proj => proj.id == pid)
        setProject(proj)
    }, [])


    return (
        <div className='Project'>
            <div className='Project__texts'>
                <h1>{project ? project.name : ''}</h1>
                <h2>{project ? project.description : ''}</h2>
                {
                    project &&
                    project.update && <span>{project.update}</span>
                }
                <div className='Project__texts__divLink'>
                    <div className='Project__circle'></div>
                    <a href={project ? project.link : ''} className='Project__texts__link' target='__blank'>Ir a proyecto</a>
                </div>
            </div>
            <div className='Project__img'>
                <img src={project ? project.image : ''} alt={project ? project.name : ''} />
            </div>
        </div>
    )
}

export default Project