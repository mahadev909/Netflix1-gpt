import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies?.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
  return (
    <div className="bg-black">
      <div className="-mt-48 relative">
        <MovieList movieListName={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList movieListName={"Popular"} movies={popularMovies} />
        <MovieList movieListName={"Top Rated"} movies={topRatedMovies} />
        <MovieList movieListName={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList movieListName={"Popular"} movies={popularMovies} />
        <MovieList movieListName={"Top Rated"} movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
