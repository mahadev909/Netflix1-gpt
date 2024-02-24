import { createSlice } from "@reduxjs/toolkit";
const GptSearchSlice = createSlice({
  name: "user",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    GptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { GptSearch } = GptSearchSlice.actions;
export default GptSearchSlice.reducer;
