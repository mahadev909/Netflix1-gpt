import React, { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../Utils/moviesSlice";

const useUpcomingMovies = async () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
