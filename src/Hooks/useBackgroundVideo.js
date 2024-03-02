import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useBackgroundVideo = (movieId) => {
  const dispatch = useDispatch();
  
  const getBackGroundVideo = async () => {
    const backGroundVideo = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      TMDB_API_OPTIONS
    );
    const json = await backGroundVideo.json();
    const filterData = json?.results?.filter((data) => data.type === "Trailer");
    const trailer = filterData?.length ? filterData[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getBackGroundVideo();
  }, []);
};

export default useBackgroundVideo;
