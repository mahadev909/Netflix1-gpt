import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptResultCards = () => {
  const { movieList, gptMovieResults } = useSelector(
    (state) => state.gptSearch
  );

  return (
    <div className="p-4 -mt-40 md:m-4 bg-black text-white bg-opacity-80">
      <div>
        {movieList.map((movie, index) => (
          <MovieList key={index} movieListName={movie} movies={gptMovieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptResultCards;
