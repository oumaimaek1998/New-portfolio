import { createSlice } from "@reduxjs/toolkit";

import { defaultLang, supportedLangs } from "../../config/i18nConfig";
import { RootState } from "../store";

interface I18nState {
  lang: string;
  supportedLangs: Record<string, string>;
}

const localStorageLang = localStorage.getItem("lang") ?? defaultLang;

const initialState: I18nState = {
  lang:
    localStorageLang == "en" || localStorageLang == "fr"
      ? localStorageLang
      : defaultLang,
  supportedLangs: { ...supportedLangs },
};

export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

// Actions
export const { setLang } = i18nSlice.actions;

// Selectors
export const selectLang = (state: RootState) => state.i18n.lang;
export const selectSupportedLangs = (state: RootState) =>
  state.i18n.supportedLangs;

export default i18nSlice.reducer;
