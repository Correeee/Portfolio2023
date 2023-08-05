import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../../navbar/assets/logo.png'

const Loader = () => {

    const [widthLoader, setWidthLoader] = useState(0)

    useEffect(() => {
        const widthInterval = setInterval(() => {
            const newCount = widthLoader + 1;
            setWidthLoader(newCount);
        }, 30);

        setTimeout(() => {
            clearInterval(widthInterval);
        }, 3000);

        return () => {
            clearInterval(widthInterval);
        }
    }, [widthLoader]);


    return (
        <div className='Loader'>
            <img src={logo} alt="Logo" />
            <div className='loader__container'>
                <div className="loader__bar" style={{ width: `${widthLoader}%` }}></div>
            </div>
        </div>
    )
}

export default Loader