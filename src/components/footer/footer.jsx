import React from 'react'
import './style.css'
import fb from './assets/fb.png'
import be from './assets/be.png'
import ig from './assets/ig.png'
import li from './assets/li.png'
import cv from './assets/cv.png'
import gh from './assets/gh.png'
import Btn from '../btn/btn'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='footer__texts'>
                <h1>Trabajemos juntos</h1>
                <h2>Estoy disponible para trabajar.</h2>
                <Btn link={'/contact'} text={'DIME ALGO'} />
            </div>
            <div className='footer__socials'>
                <h3>© Maximiliano Correa 2023</h3>
                <h3>|</h3>
                {/* <a href='https://www.facebook.com' target='__blank' className="social__links"><img src={fb} alt="Facebook" className="social__links_img" /></a>
                <a href='https://www.instagram.com' target='__blank' className="social__links"><img src={ig} alt="Instagram" className="social__links_img" /></a> */}
                <a href='https://www.linkedin.com/in/maximiliano-correa-developer/' target='__blank' className="social__links"><img src={li} alt="Linkedin" className="social__links_img" /></a>
                <a href='https://drive.google.com/file/d/1piZAbeZBdSmtbK14E722ypj4zehvHs1J/view' target='__blank' className="social__links"><img src={cv} alt="Curriculum" className="social__links_img" /></a>
                <a href='https://github.com/Correeee?tab=repositories' target='__blank' className="social__links"><img src={gh} alt="Github" className="social__links_img" /></a>
                {/* <a href='https://www.behance.com' target='__blank' className="social__links"><img src={be} alt="Behance" className="social__links_img" /></a> */}
            </div>
        </div>
    )
}

export default Footer