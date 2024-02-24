import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../Utils/constants";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getPopularMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getPopularMoviesData();
  }, []);
};

export default useTopRatedMovies;
