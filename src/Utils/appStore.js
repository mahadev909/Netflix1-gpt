import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GptSearchReducer from "./GptSearchSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: GptSearchReducer,
    config: configReducer,
  },
});
export default appStore;
