import React, { useState, useEffect } from "react";
import Movie from "./movie.jsx";

const Movies = ({ newmovie }) => {
  const [movies, setMovies] = useState([]);
  const [movieindex, setMovieindex] = useState(0);

  // Fetch movies
  useEffect(() => {
    fetch("https://fooapi.com/api/movies")
      .then(res => res.json())
      .then(data => {
        setMovies(data.data);
      });
  }, []);

  // Add new movie
  useEffect(() => {
    if (newmovie?.title) {
      setMovies(prev => [...prev, newmovie]);
    }
  }, [newmovie]);

  return (
    <div className='flex flex-col items-center justify-center'>

      {/* Single Movie Viewer */}
      <div className="w-64 h-[500px] flex flex-col items-center justify-between mt-5">
        {movies[movieindex] && <Movie movie={movies[movieindex]} />}
      </div>

      {/* Prev / Next */}
      <div className='flex items-center justify-between gap-8 relative left-36 top-6 mb-5'>
        <button
         
          onClick={() => setMovieindex(old => Math.max(0, old - 1))}
        >
          prev
        </button>
        <button
         
          onClick={() => setMovieindex(old => Math.min(movies.length - 1, old + 1))}
        >
          next
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {movies.map((movie) => (
          <div key={movie.id} className="border p-2 rounded shadow">
            <img
              src={movie.poster}
              alt=""
              className="w-full h-40 object-cover"
              onError={e => { e.target.onerror = null; e.target.src = "https://placehold.co/300x400?text=No+Image"; }}
            />
            <h3 className="text-sm font-bold">{movie.title}</h3>
            <p className="text-xs">{movie.year}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Movies;