import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import useBackgroundVideo from "../Hooks/useBackgroundVideo";
import Header from "./Header";

const MovieDetail = () => {
  const movie = useSelector((store) => store?.movies?.movieId);
  //   return (
  //     <div>
  //       <VideoBackground movieId={movie?.id} />
  //       {/* <VideoTitle /> */}
  //     </div>
  //   );
  const trailerKey = useSelector((state) => state?.movies?.trailerVideo?.key);
  useBackgroundVideo(movie?.id);

  return (
    <>
      <Header />
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video h-full"
          src={"https://www.youtube.com/embed/" + trailerKey + "?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default MovieDetail;
