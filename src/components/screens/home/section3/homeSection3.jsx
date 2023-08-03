import React from 'react'
import './style.css'
import ProjectCard from '../../../projectCard/projectCard'
import { motion } from 'framer-motion'

const greyBackground = 'var(--color-secundary)'
const whiteBackground = 'var(--color-terciary)'

const projects = [
    { name: 'Project', category: 'ux/ui', description: '', image: '', backgroundColor: greyBackground },
    { name: 'Project', category: 'Frontend', description: '', image: '', backgroundColor: whiteBackground }
]

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
                projects.map((proj, i) => {
                    return (
                        <ProjectCard key={i} name={proj.name} category={proj.category} description={proj.description} image={proj.image} number={i} backgroundColor={proj.backgroundColor} />
                    )
                })
            }
        </motion.div>
    )
}

export default HomeSection3