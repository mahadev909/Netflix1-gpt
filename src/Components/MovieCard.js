import React from "react";
import { TMDB_IMG_URL } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovieId } from "../Utils/moviesSlice";

const MovieCard = ({ poster_path, movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnClick = () => {
    console.log("ppopoppp");
    dispatch(addMovieId(movie))
    navigate("/moviedetail");
  };
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
