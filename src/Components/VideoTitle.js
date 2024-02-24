import React from "react";

const VideoTitle = (props) => {
  const { title, overView } = props;

  return (
    <div className="pl-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="pt-[20%] font-bold text-5xl px-2">{title}</h1>
      <p className="w-1/4 p-4">{overView}</p>
      <div className="p-4">
        <button className="bg-white text-black w-28 p-2 rounded-lg hover:opacity-80">▶️ Play</button>
        <button className="bg-slate-500 w-28 p-2 rounded-lg mx-4 hover:opacity-80">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

