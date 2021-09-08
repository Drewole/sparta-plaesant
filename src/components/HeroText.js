import React from 'react'

const HeroText = ({ title, date, subtitle }) => {

    return (
        <div className="hero-text">
            <h1>{title}</h1>
            <h3>{date}</h3>
            <p>{subtitle}</p>
        </div>
    )
}

export default HeroText
