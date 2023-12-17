import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { THEME } from "../utils/enum";

export interface AppState {
  theme: THEME.LIGHT | THEME.DARK;
  activeSection: string;
}

const localStorageTheme = localStorage.getItem("theme");

const initialState: AppState = {
  theme:
    localStorageTheme === THEME.LIGHT || localStorageTheme === THEME.DARK
      ? localStorageTheme
      : THEME.DARK,
  activeSection: "home",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

// Actions
export const { setTheme, setActiveSection } = appSlice.actions;

// Selectors
export const selectTheme = (state: RootState) => state.app.theme;
export const selectActiveSection = (state: RootState) =>
  state.app.activeSection;

export default appSlice.reducer;
