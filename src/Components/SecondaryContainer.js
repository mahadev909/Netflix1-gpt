import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies?.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies?.upcomingMovies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-48 relative">
        <MovieList movieListName={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList movieListName={"Popular"} movies={popularMovies} />
        <MovieList movieListName={"Top Rated"} movies={topRatedMovies} />
        <MovieList movieListName={"Up Coming"} movies={upcomingMovies} />
        <MovieList movieListName={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList movieListName={"Popular"} movies={popularMovies} />
        <MovieList movieListName={"Top Rated"} movies={topRatedMovies} />
        <MovieList movieListName={"Up Coming"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
