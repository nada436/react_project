import React, { useState } from "react";
import Movie from "./movie.jsx";

const Movies = () => {
 const [movieindex, setMovieindex] = useState(1);

  return( 
  <div className='flex flex-col items-center justify-center '>
    <div className="w-64 h-[500px] flex flex-col items-center justify-between" >
        <Movie  index={movieindex}/>
    </div>
  <div className='flex items-center justify-between gap-8 relative left-36 top-6 '>
 <button className="rounded-2xl bg-amber-50 p-3  hover:bg-amber-100 hover:size-16 " onClick={() => setMovieindex((old) => old - 1)}>
  prev
</button>

<button className="rounded-2xl bg-amber-50 p-3  hover:bg-amber-100 hover:size-16 "onClick={() => setMovieindex((old) => old + 1)}>
  next
</button>
  </div>
  </div>
  );
};

export default Movies;