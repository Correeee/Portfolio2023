import React from 'react'
import './style.css'
import Btn from '../btn/btn'

const ProjectCard = ({name, category, description, image, number, backgroundColor}) => {
    return (
        <div className='ProjectCard' style={{backgroundColor: backgroundColor}}>
            <div className='projectCard__allTexts'>
                <div>
                    <div className='ProjectCard__line'></div>
                </div>
                <div className='ProjectCard__number'>{number + 1}</div>
                <div className='ProjectCard__data'>
                    <h2>{name.toUpperCase()}</h2>
                    <h3>{category.toUpperCase()}</h3>
                </div>
            </div>
            <div className='ProjectCard__button'>
                <Btn text={'VIEW PROJECT'} />
            </div>
        </div>
    )
}

export default ProjectCard