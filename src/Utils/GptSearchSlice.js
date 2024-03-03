import { createSlice } from "@reduxjs/toolkit";
const GptSearchSlice = createSlice({
  name: "user",
  initialState: {
    showGptSearch: false,
    movieList: null,
    gptMovieResults: null
  },
  reducers: {
    GptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const {movieList, movieResults} = action.payload;
      state.movieList = movieList;
      state.gptMovieResults = movieResults;
    }
  },
});
export const { GptSearch, addGptMovieResults} = GptSearchSlice.actions;
export default GptSearchSlice.reducer;
