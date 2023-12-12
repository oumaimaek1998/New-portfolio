import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { store } from "./app/store";
import App from "./App.tsx";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage.tsx";
import HomePage from "./components/pages/HomePage/HomePage.tsx";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage.tsx";
import LanguageProvider from "./providers/LanguageProvider/LanguageProvider.tsx";

import "./scss/custom-style.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </Provider>
);
