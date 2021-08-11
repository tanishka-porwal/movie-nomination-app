import React from 'react'
import './Hero.css'


const Hero = ({searchString, setSearchString, placeholder}) => {
    return (
        <div>
            <input type = "text"
            onChange = {(e) => setSearchString(e.target.value)}
            value = {searchString}
            placeholder = {placeholder}>
            </input>
        </div>
    )
}

export default Hero