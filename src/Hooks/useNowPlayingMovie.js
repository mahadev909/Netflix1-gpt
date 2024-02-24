import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const getNowPlayingMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMoviesData();
  }, []);
};

export default useNowPlayingMovie;
