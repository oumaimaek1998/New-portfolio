import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./features/appSlice";
import i18nReducer from "./features/i18nSlice";

export const store = configureStore({
  reducer: { app: appReducer, i18n: i18nReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
