import React from 'react'

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component. In this project, the props parameter is the variable movie, passes as {movie}
// You can also destructure your props directly from the parameter list

function MovieDisplay({movie}) {
  //function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </>
    );
  };

  //Ternary operator will determine which functions JSX we will return
// return movie ? loaded() : loading();
//function to return loading JSX
const loading = () => {
  return <h1>No Movie to Display</h1>;
};

  //The component must return some JSX
  return movie ? loaded() : loading();
  
  // return (
  //   <>
  //     <h1>{movie.Title}</h1>
  //     <h2>{movie.Genre}</h2>
  //     <img src={movie.Poster} alt={movie.Title} />
  //     <h2>{movie.Year}</h2>
  //     <h2>{movie.rated}</h2>
  //     <h2>{movie.ratings}</h2>
  //     <h2>{movie.awards}</h2>
  //   </>
  // );
};
//NB: // We must export the component like below, to use it in other files 
export default MovieDisplay