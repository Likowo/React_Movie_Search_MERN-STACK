import { useState, useEffect } from "react";
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
   // --------------------------{APIKEY DATA} --i.e. //variable with your apiKey
  const apiKey= "2dfc8cb5";

  // --------------------------{  //State to hold movie data}
const [movie,setMovie] = useState(null);

//Function to getMovies
const getMovie = async(searchTerm)=>{
// make fetch request and store response i.e //====Go to the Site and Search for the Title
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)

  // Pass JSON response into a javascript object // //----Turn Info into JSON format
  const data = await response.json()

  //set the Movie state to the movie ////-----> Take retrieved data and set it as current Movie
  setMovie(data);
}; 

//This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

//-------------------------[ Function that uses async-await to fetch movie data --Displaying a movie]
  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
 // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} /> 
      <MovieDisplay movie={movie}/>
    </div>
  );
}
//Now go and display the data in MovieDisplay.jsx
export default App;


//===================================================================

//Try and Catch to properly handle errors

// const getMovie = async (searchTerm) => {
// 	// make fetch request and store response
// 	try {
// 		const response = await fetch(
// 			`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
// 		);
// 		// Parse JSON response into a javascript object
// 		const data = await response.json();
// 		//set the Movie state to the movie
// 		setMovie(data);
// 	} catch(e){
// 		console.error(e)
// 	}
// };