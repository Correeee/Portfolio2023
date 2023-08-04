import React from 'react'
import './style.css'
import { motion } from 'framer-motion'
import { projectsData } from '../../../data/projectsData'
import ProjectCard from '../../projectCard/projectCard'


const Works = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.2
            }}
            className='Works'>
            {
                projectsData.map((proj, i) => {
                    return (
                        <ProjectCard key={i} name={proj.name} category={proj.category} description={proj.description} image={proj.image} number={i} backgroundColor={proj.backgroundColor} id={proj.id} />
                    )
                })
            }
        </motion.div>
    )
}

export default Works