import About from "../About/About";

import "./Home.scss";

/**
 * Home component
 * @returns {JSX.Element}
 */
const Home = (): JSX.Element => {
  return (
    <div className="Home">
      <About />
    </div>
  );
};

export default Home;
