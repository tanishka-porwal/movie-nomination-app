import React, {useState, useEffect} from 'react'
import Hero from './Hero/Hero'
import ListMovies from './ListMovies/ListMovies.js'
import Nominations from './Nominations/Nominations.js'
import Navbar from './Navbar/Navbar.js'
import axios from 'axios'
import './App.css';

function App() {

  const [searchString, setSearchString] = useState("")
  const [data, setData] = useState([])
  console.log(data)
  const [nominated, setNominated] = useState([])
  console.log(nominated, "nominated")

  //through expressBackend

  useEffect(() => {
    axios.get(`http://localhost:4200/getMovies?q=${searchString}`)
    //axios.get(`http://www.omdbapi.com/?apikey=e52cb6b&s=${searchString}`)
    .then(respBody =>{
      console.log(respBody, "respBody")
      setData(respBody.data)
    })
    .catch(e => console.log(e))
  }, [searchString]) //componentDidUpdate everytime we change searchString


  // useEffect(() => {
  //   axios.get(`http://localhost:4001/v1/movies/getmovies?search=${searchString}`)
  //   .then(respBody =>{
  //     console.log(respBody, "respBody")
  //     setData(respBody.data)
  //   })
  //   .catch(e => console.log(e))
  // }, [searchString]) //componentDidUpdate everytime we change searchString

  //when app starts we want to fetch database and see if there are any nominated movies and we want to preload it
  useEffect(() => {
    axios.get(`http://localhost:4001/v1/nominations/getnominations`)
    .then(i => console.log(i))
    .catch(e => console.log(e))
  }, []) 
  
  return (
    <div className = "App">
      {/* <div className= "navbar">
        <Navbar />
      </div> */}
      <div className="main-container">
        <Hero
        searchString = {searchString}
        setSearchString ={setSearchString}
        placeholder = "Enter a Movie search here" 
        />

        <div className= "splitbottom"> 
          <div className= "flex-item">
            <ListMovies
              data = {data}
              setNominated = {setNominated}
              nominated = {nominated}
            />
          </div> 
          <div className= "flex-item">
            <Nominations 
            data = {data}
            setNominated= {setNominated} 
            nominated = {nominated} 
            />
          </div> 
        </div>
      </div>
    </div>
    
  );
}

export default App;
