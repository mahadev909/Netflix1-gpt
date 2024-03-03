import React from "react";
import { TMDB_IMG_URL } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovieId } from "../Utils/moviesSlice";

const MovieCard = ({ poster_path, movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(addMovieId(movie));
    navigate("/Netflix1-gpt/moviedetail");
  };
  if (!poster_path) return null;
  return (
    <div className="p-2 w-48 cursor-pointer">
      <img
        src={TMDB_IMG_URL + poster_path}
        alt="movie_img"
        onClick={handleOnClick}
      />
    </div>
  );
};

export default MovieCard;
