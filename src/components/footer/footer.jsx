import React from 'react'
import './style.css'
import fb from './assets/fb.png'
import be from './assets/be.png'
import ig from './assets/ig.png'
import li from './assets/li.png'
import Btn from '../btn/btn'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='footer__texts'>
                <h1>Let´s work together</h1>
                <h2>I´m available for freelance work.</h2>
                <Btn link={'/contact'} text={'SAY HELLO'} color={'white'} />
            </div>
            <div className='footer__socials'>
                <h3>© Maximiliano Correa 2023</h3>
                <h3>|</h3>
                <a href='https://www.facebook.com' target='__blank' className="social__links"><img src={fb} alt="Facebook" className="social__links_img" /></a>
                <a href='https://www.instagram.com' target='__blank' className="social__links"><img src={ig} alt="Instagram" className="social__links_img" /></a>
                <a href='https://www.linkedin.com' target='__blank' className="social__links"><img src={li} alt="Linkedin" className="social__links_img" /></a>
                <a href='https://www.behance.com' target='__blank' className="social__links"><img src={be} alt="Behance" className="social__links_img" /></a>
            </div>
        </div>
    )
}

export default Footer