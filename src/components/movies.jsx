import React, { useState } from "react";
import Movie from "./movie.jsx";

const Movies = () => {
  const [moviesList] = useState([
    { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "Titanic", year: 1997 },
  
  ])

  return (
    <div style={{display:"flex" ,gap:"50px" ,justifyContent:"center"}}>
      {moviesList.map((m) => (
        <Movie key={m.id} {...m} />
      ))}
    </div>
  );
};

export default Movies;