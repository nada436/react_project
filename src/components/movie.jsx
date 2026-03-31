import React from 'react';
import default_poster from '../assets/default_poster.jpg';

const Movie = ({ movie }) => {

  const handleError = (e) => {
    e.target.src = default_poster;
  };

  return (
    <div className='space-y-2 text-center'>
      <img
        className="w-full"
        src={movie.poster}
        alt=""
        onError={handleError}
      />
      <h1 className='text-xl'>title: {movie.title}</h1>
      <h6>year: {movie.year}</h6>
    </div>
  );
};

export default Movie;