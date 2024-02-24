import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../Utils/constants";
import { addPopularMovies } from "../Utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMoviesData();
  }, []);
};

export default usePopularMovies;
