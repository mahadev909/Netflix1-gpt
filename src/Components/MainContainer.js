import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!movie) return;

  const mainMovie = movie[0];
  return (
    <div className="pt-[27%] bg-black md:none md:pt-[0%]">
      <VideoTitle title = {mainMovie.original_title} overView={mainMovie.overview} movie={mainMovie}/>
      <VideoBackground movieId={mainMovie.id}/>
    </div>
  );
};

export default MainContainer;
