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
import About from "./components/templates/About/About.tsx";
import ErrorPage from "./components/templates/Error/ErrorPage.tsx";
import Home from "./components/templates/Home/Home.tsx";
import NotFound from "./components/templates/NotFound/NotFound.tsx";
import LanguageProvider from "./providers/LanguageProvider/LanguageProvider.tsx";

import "./scss/custom-style.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="*" element={<NotFound />} />
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
