import { createSlice } from "@reduxjs/toolkit";

import { defaultLang, supportedLangs } from "../../config/i18nConfig";
import English from "../../i18n/en.json";
import French from "../../i18n/fr.json";
import { RootState } from "../store";

interface I18nState {
  lang: string;
  supportedLangs: Record<string, string>;
  translations: Record<string, string>;
}

const translations: Record<string, Record<string, string>> = {
  en: English,
  fr: French,
};

const localStorageLang = localStorage.getItem("lang") ?? defaultLang;

const initialState: I18nState = {
  lang:
    localStorageLang == "en" || localStorageLang == "fr"
      ? localStorageLang
      : defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: translations[localStorageLang] || translations[defaultLang],
};

export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;

      switch (action.payload) {
        case "fr":
          state.translations = French;
          break;
        default:
          state.translations = English;
      }
    },
  },
});

// Actions
export const { setLang } = i18nSlice.actions;

// Selectors
export const selectTranslations = (state: RootState) => state.i18n.translations;
export const selectLang = (state: RootState) => state.i18n.lang;
export const selectSupportedLangs = (state: RootState) =>
  state.i18n.supportedLangs;

export default i18nSlice.reducer;
