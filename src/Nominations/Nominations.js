import React from 'react'
import Card from '../Card/Card'

const Nominations = ({data, nominated, setNominated}) => {

    function handleRemoveNominations(imdbID){
        let copyNominated = [...nominated]
        let idx = copyNominated.indexOf(imdbID)
        copyNominated.splice(idx, 1)

        setNominated(copyNominated)
    }

    let nominatedMovies = data && data
    .filter(j => nominated.includes(j.imdbID))
    .map(i => {
        return (
            <div  key={i.imdbID} className="cardcontainer">
                <Card 
                title = {i.Title}
                year = {parseInt(i.Year)}
                poster = {i.Poster}
                alt = {i.Title} 
                cardDesign = "card-design"
                />
                <button disabled = {!nominated.includes(i.imdbID)} onClick ={()=> handleRemoveNominations(i.imdbID)}>
                    UnNominate</button>
            </div>
        )
    })
 
    return (
        <div>
            <h3>Nominate Movies</h3>
        {nominatedMovies}
        </div>
    )
}

export default Nominations
