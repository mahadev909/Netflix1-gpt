import React, { useRef } from "react";
import { LOGIN_PAGE_BACKGROUND, TMDB_API_OPTIONS } from "../Utils/constants";
import { lang } from "../Utils/languageConst";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openai";
import { addGptMovieResults } from "../Utils/GptSearchSlice";
import GptResultCards from "./GptResultCards";

const GptSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const isGptMovieListAvailable = useSelector(
    (state) => state.gptSearch.movieList
  );

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleCLickGptSearch = async () => {
    const GptQuery =
      "Act as movie recomentation system and suggest some movies for query" +
      searchText.current.value +
      "only give names of 5 movies comma separated like example given ahead. Example: Sholay, karan arjun, mai jhuti tu makkar, bramhastra, chanai express";
    // const moviesGptSearch = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: GptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(moviesGptSearch.choices[0].message.content)
    // here spliting the results from gpt search to array of movies
    // const gptMovies = moviesGptSearch.choices?.[0]?.message?.content?.split(",");
    // currently hardcoding gptResult as i dont have gpt API Key
    const gptMovies = ["Raaz", "Sholay", "KGF", "Dhoom", "Gadar", "Phir Hera pheri", "Brahmastra"];
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // above will return 5 promises
    const results = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResults({ movieList: gptMovies, movieResults: results })
    );
  };

  const language = useSelector((store) => store.config.lang);
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover w-screen"
          src={LOGIN_PAGE_BACKGROUND}
          alt="background-img"
        />
      </div>
      <div className="pt-[10%] flex justify-center">
        <form
          className="w-[92%] md:w-1/2 h-16 p-2 bg-black grid grid-cols-12 rounded-lg my-[40%] md:my-[0%]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="col-span-9 mx-4 rounded-lg p-2"
            type="text"
            placeholder={lang[language].GptSearchPlaceholder}
            ref={searchText}
          />
          <button
            className="bg-red-500 col-span-3 mx-4 rounded-lg"
            onClick={handleCLickGptSearch}
          >
            {lang[language].Search}
          </button>
        </form>
      </div>
      {isGptMovieListAvailable && <GptResultCards />}
    </div>
  );
};

export default GptSearch;
