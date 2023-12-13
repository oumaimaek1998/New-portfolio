import SideMenu from "../../atoms/SideMenu/SideMenu";
// import About from "../../templates/About/About";
import Home from "../../templates/Home/Home";
// import Skills from "../../templates/Skills/Skills";

import "./HomePage.scss";

const SideMenuItems = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: "Skills", active: false },
];

/**
 * Home page
 * @returns {JSX.Element}
 */
const HomePage = (): JSX.Element => {
  return (
    <div className="HomePage container-xxl">
      <div className="HomePage__Sidebar">
        <SideMenu
          className="HomePage__SideMenuContainer"
          items={SideMenuItems}
        />
      </div>
      <div className="HomePage__Content">
        <Home />
        {/* <About />
        <Skills /> */}
      </div>
    </div>
  );
};

export default HomePage;
