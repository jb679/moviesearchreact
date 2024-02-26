import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
