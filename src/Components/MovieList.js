import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieListName, movies }) => {

  return (
    <div>
      <h1 className="text-white text-lg pl-4 pt-2">{movieListName}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} movie={movie}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
