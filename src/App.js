import React, { useState } from "react";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
import { searchMovies } from "./movieService";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
