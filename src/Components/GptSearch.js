import React from "react";
import { LOGIN_PAGE_BACKGROUND } from "../Utils/constants";
import { lang } from "../Utils/languageConst";
import { UseSelector, useSelector } from "react-redux";

const GptSearch = () => {
  const language = useSelector((store)=> store.config.lang);
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGIN_PAGE_BACKGROUND} alt="background-img" />
      </div>
      <div className="pt-[10%] flex justify-center">
        <form className=" w-1/2 h-16 p-2 bg-black grid grid-cols-12 rounded-lg ">
          <input
            className="col-span-9 mx-4 rounded-lg p-2"
            type="text"
            placeholder={lang[language].GptSearchPlaceholder}
          />
          <button className="bg-red-500 col-span-3 mx-4 rounded-lg">
            {lang[language].Search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
