import { useRef, useEffect } from "react";

import { selectActiveSection } from "../../../app/features/appSlice";
import { useAppSelector } from "../../../app/hooks";
import SideMenu from "../../atoms/SideMenu/SideMenu";
import About from "../../templates/About/About";
import Home from "../../templates/Home/Home";
import Skills from "../../templates/Skills/Skills";

import "./HomePage.scss";

const SideMenuItems = [
  { label: "Home", section: "home" },
  { label: "About", section: "about" },
  { label: "Skills", section: "skills" },
];

/**
 * Home page
 * @returns {JSX.Element}
 */
const HomePage = (): JSX.Element => {
  const activeSection = useAppSelector(selectActiveSection);

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
  };

  const headerHeight = 77;
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref?.current) {
      const scrollPosition = ref.current.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToSection(sectionRefs[activeSection]);
  }, [activeSection]);

  return (
    <div className="HomePage container-xxl">
      <div className="HomePage__Sidebar">
        <SideMenu
          className="HomePage__SideMenuContainer"
          items={SideMenuItems.map((item) => ({
            ...item,
            active: item.section === activeSection,
          }))}
        />
      </div>
      <div className="HomePage__Content">
        <Home className="HomePage__Content__Home" ref={sectionRefs.home} />
        <About ref={sectionRefs.about} />
        <Skills ref={sectionRefs.skills} />
      </div>
    </div>
  );
};

export default HomePage;
