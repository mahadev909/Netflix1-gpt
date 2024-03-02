import React, { useRef } from "react";
import { LOGIN_PAGE_BACKGROUND } from "../Utils/constants";
import { lang } from "../Utils/languageConst";
import { useSelector } from "react-redux";
import openai from "../Utils/openai";

const GptSearch = () => {
  const searchText = useRef(null);

  const handleCLickGptSearch = async () => {
    console.log(searchText.current.value);
      const moviesGptSearch = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      })
      console.log(moviesGptSearch.choices)
  };

  const language = useSelector((store) => store.config.lang);
  return (
    <div>
      <div className="absolute -z-10">
        <img className="h-screen object-cover" src={LOGIN_PAGE_BACKGROUND} alt="background-img" />
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
    </div>
  );
};

export default GptSearch;
