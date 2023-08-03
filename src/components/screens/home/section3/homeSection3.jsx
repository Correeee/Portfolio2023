import React from 'react'
import './style.css'
import ProjectCard from '../../../projectCard/projectCard'
import { motion } from 'framer-motion'
import { projectsData } from '../../../../data/projectsData'

const HomeSection3 = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
                delay: 0.5,
            }}
            className='HomeSection3'>
            {
                projectsData.map((proj, i) => {
                    return (
                        <ProjectCard key={i} name={proj.name} category={proj.category} description={proj.description} image={proj.image} number={i} backgroundColor={proj.backgroundColor} id={proj.id}/>
                    )
                })
            }
        </motion.div>
    )
}

export default HomeSection3