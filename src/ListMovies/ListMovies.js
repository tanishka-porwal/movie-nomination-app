import axios from 'axios'
import React, {useEffect} from 'react'
import Card from '../Card/Card'
import './ListMovies.css'


const ListMovies = ({data, nominated, setNominated}) => {

    function handleNominations(imdbID){           
        let copyNominated = [...nominated]

        if(!nominated.includes(imdbID)) copyNominated.push(imdbID)
        setNominated(copyNominated)

        //set in mongoDB
        axios.post(`http://localhost:4001/v1/nominations/setNominations?nominatedMovie=${imdbID}`)
        .then(i => console.log(i))
        .catch(e => console.log(e))

    }


    let movies = data && data.map(i => {
        return (
            <div className="cardcontainer">
                <Card 
                title = {i.Title}
                year = {parseInt(i.Year)}
                poster = {i.Poster}
                alt = {i.Title} 
                cardDesign = "card-design"
                />
                <button disabled = {nominated.includes(i.imdbID)} onClick ={()=> handleNominations(i.imdbID)}>
                {nominated.includes(i.imdbID)? 'Nominated' : 'Nominate'}</button>
            </div>
        )
    })

    return (
        <div className= "moviescontainer">
            <h3>List of Movies</h3>
            {movies}
        </div>
    )
    
}

export default ListMovies