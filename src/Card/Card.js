import React from 'react'
import './Card.css'

const Card = ({title, year, poster}) => {
    return (
        <div>
            <h5>{title}</h5>
            <p>{year}</p>
            <img src = {poster} width = "200" height ="200"/>
        </div>
    )
}

export default Card