import React from 'react'

const Images = (poster, alt,width, height) => {
    return (
        <div>
            <img src = {poster} alt = {alt} width = {width} height ={height}/>
        </div>
    )
}

export default Images
