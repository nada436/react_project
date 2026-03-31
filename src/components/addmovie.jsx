import React, { useState } from 'react';

const Addmovie = ({ onsubmit }) => {
  const [movie, setmovie] = useState({
    title: "",
    year: "",
    poster: ""
  });

  const handelsubmit = (e) => {
    e.preventDefault();
    onsubmit(movie);
    setmovie({ title: "", year: "", poster: "null" });
  };

  const handelonchange = (e) => {
    const value = e.target.value;

    setmovie({
      ...movie,
      [e.target.name]: value
    });
  };

  return (
    <div className="w-full flex justify-center mt-6">

      <form
        onSubmit={handelsubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-80 flex flex-col gap-4"
      >

        <h2 className="text-xl font-bold text-center text-gray-700">
          Add Movie 🎬
        </h2>

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          value={movie.title}
          onChange={handelonchange}
          className="rounded-xl border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Year */}
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={movie.year}
          onChange={handelonchange}
          className="rounded-xl border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        />

      

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition-all duration-300"
        >
          Add Movie
        </button>

      </form>
    </div>
  );
};

export default Addmovie;