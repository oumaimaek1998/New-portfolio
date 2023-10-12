import { Outlet } from "react-router-dom";

import { selectTheme } from "./app/features/appSlice";
import { useAppSelector } from "./app/hooks";
import Header from "./components/organisms/Header/Header";

import "./App.scss";

/**
 * App component
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => {
  const theme = useAppSelector(selectTheme);
  return (
    <div className={`theme-${theme}`}>
      {/* Display Header on all pages */}
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
