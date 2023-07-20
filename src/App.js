import './App.css';
import { useState, useEffect } from "react";
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';



function App() {
   // --------------------------{APIKEY DATA}
  const apiKey= "2dfc8cb5"

  // --------------------------{STATE}
 
const [movie,setMovie] = useState(null)

//Function to getMovies
const getMovie = async(searchTerm)=>{
// make fetch request and store response i.e //====Go to the Site and Search for the Title
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)

  // Parse JSON response into a javascript object // //----Turn Info into JSON format
  const data = await response.json()

  //set the Movie state to the movie ////-----> Take retrieved data and set it as current Movie
  setMovie(data);
}; 

//-------------------------[ Function that uses async-await to fetch movie data]
  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay />
    </div>
  );
}

export default App;
