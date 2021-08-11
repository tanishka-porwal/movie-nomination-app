import React, {useState, useEffect} from 'react'
import Hero from './Hero/Hero'
import ListMovies from './ListMovies/ListMovies.js'
// import Nominations from 'Nominations.js'
import axios from 'axios'
import './App.css';

function App() {

  const [searchString, setSearchString] = useState("")
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=e52cb6b&s=${searchString}`)
    .then(resp => setData(resp.data.Search))
    .catch(e => console.log(e))
  }, [searchString]) //componentDidUpdate everytime we change searchString
  
  return (
    <div className="App">
      <Hero
        searchString = {searchString}
        setSearchString ={setSearchString}
        placeholder = "Enter Movie search here" />
      <ListMovies
        data = {data}
      />
      {/* <Nominations /> */}
    </div>
  );
}

export default App;
