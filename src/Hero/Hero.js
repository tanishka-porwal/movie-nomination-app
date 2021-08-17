import React from 'react'
import './Hero.css'
import {MDCTextField} from '@material/textfield';

//const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const Hero = ({searchString, setSearchString, placeholder}) => {

    //Debouncing
    // function debounce(func, timeout = 300){
    //     let timer;
    //     return (...args) => {
    //         let context = this
    //       clearTimeout(timer);
    //       timer = setTimeout(() => { func.apply(context, args); }, timeout);
    //     };
    // }

     //const handleDebounce = debounce((e) => setSearchString(e.target.value))
    return (
        <div>
            <input 
            type = "text"
            onChange = {(e) => setSearchString(e.target.value)}
            value = {searchString}
            placeholder = {placeholder}
            onKeyDown = {console.log("On key down pressed")}
            onKeyUp = {console.log("On key up pressed")}
            
            >
            </input>
        </div>
    )
}

export default Hero