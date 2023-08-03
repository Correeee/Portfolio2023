import React from 'react'
import './style.css'
import HomeSection1 from './section1/homeSection1'
import HomeSection2 from './section2/homeSection2'
import HomeSection3 from './section3/homeSection3'
import HomeSection4 from './section4/homeSection4'
import { motion } from 'framer-motion'

const Home = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: 0.2
            }}
            className='Home'>
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
        </motion.div>
    )
}

export default Home