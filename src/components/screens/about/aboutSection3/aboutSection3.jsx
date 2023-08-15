import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

const AboutSection3 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
                delay: 0.5,
            }}
            className='AboutSection3'>
            <h1>Como trabajo.</h1>
            <div className='AboutSection3__texts'>
                <h2>Como desarrollador frontend, me especializo en crear experiencias digitales fluidas que combinan experiencia técnica con principios de diseño centrados en el usuario. Mi enfoque de aprendizaje continuo me permite adaptarme a las demandas dinámicas del proyecto y ofrecer soluciones de vanguardia.</h2>
                <h2>A partir de los diseños proporcionados o no, convierto las maquetas y bocetos en código HTML, CSS y JavaScript. Presto especial atención a los detalles visuales, la tipografía, los espacios en blanco y los elementos interactivos para asegurar la coherencia con la identidad de la marca y la mejor experiencia posible para el usuario.</h2>
                <h2>Me aseguro de que las interfaces sean completamente responsivas y se vean y funcionen de manera óptima en diversos dispositivos y tamaños de pantalla.</h2>
                <h2>Permanezco comprometido con la mejora continua y el mantenimiento de los proyectos en curso.</h2>
            </div>
        </motion.div>
    )
}

export default AboutSection3