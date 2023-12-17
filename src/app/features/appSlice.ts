import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { THEME } from "../utils/enum";

export interface AppState {
  theme: THEME.LIGHT | THEME.DARK;
}

const localStorageTheme = localStorage.getItem("theme");

const initialState: AppState = {
  theme:
    localStorageTheme === THEME.LIGHT || localStorageTheme === THEME.DARK
      ? localStorageTheme
      : THEME.DARK,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

// Actions
export const { setTheme } = appSlice.actions;

// Selectors
export const selectTheme = (state: RootState) => state.app.theme;

export default appSlice.reducer;
