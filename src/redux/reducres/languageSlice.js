import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  language: null,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    languageData: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {languageData} = languageSlice.actions;
export default languageSlice.reducer;
