import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovieId } from "../Utils/moviesSlice";

const VideoTitle = (props) => {
  const { title, overView, movie } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/Netflix1-gpt/moviedetail");
    dispatch(addMovieId(movie));
  };
  return (
    <div className="pl-8 md:pl-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="w-[40%] md:w-[30%] pt-[20%] font-bold text-1xl md:text-5xl px-2 mt-16 md:mt-0">{title}</h1>
      <p className="hidden md:block w-1/4 p-4">{overView}</p>
      <div className="px-2 py-4 md:py-0">
        <button
          className="bg-white text-black w-20 md:w-28 p-2 rounded-lg hover:opacity-80"
          onClick={handleOnClick}
        >
          ▶️ Play
        </button>
        <button className="invisible md:visible bg-slate-500 w-28 p-2 rounded-lg mx-4 hover:opacity-80">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
