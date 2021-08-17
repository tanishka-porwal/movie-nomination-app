import React from 'react'
import './Card.css'
import PropTypes from 'prop-types';

const Card = ({title, year, poster, alt, height, width, cardDesign}) => {
    return (
        <div className ={cardDesign}> 
            <img src = {poster} alt = {alt} width = {width} height ={height}/>
            <h5>{title}</h5>
            <p>{year}</p>
        </div>
    )
}
Card.defaultProps = {
    width : 200,
    height : 200
}

Card.propTypes = {
    title : PropTypes.string,
    year : PropTypes.number,
    poster : PropTypes.string

}

export default Card