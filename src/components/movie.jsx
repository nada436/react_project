import React from "react";

const Movie = ({ title, year }) => {
  const cardStyle = {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
};

export default Movie;