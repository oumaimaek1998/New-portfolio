import Lottie from "lottie-react";
import { useState, useEffect } from "react";

import { selectTheme } from "../../../app/features/appSlice";
import { useAppSelector } from "../../../app/hooks";
import animationData from "../../../assets/icons/developer-animation.json";

import "./About.scss";

/**
 * About component
 * @returns {JSX.Element}
 */
const About = (): JSX.Element => {
  const roles = [
    "React.js Developer",
    "Node.js developer",
    "Full Stack developer",
  ];

  const theme = useAppSelector(selectTheme);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState("");

  useEffect(() => {
    let charIndex = 0;

    const roleInterval = setInterval(() => {
      setCurrentRole(roles[currentRoleIndex].slice(0, charIndex));
      charIndex++;

      if (charIndex > roles[currentRoleIndex].length) {
        clearInterval(roleInterval);
        setTimeout(() => {
          charIndex = 0;
          setCurrentRole("");
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(roleInterval);
    };
  }, [currentRoleIndex]);

  return (
    <div className={`About ${theme === "light" ? "light-theme" : ""}`}>
      <div className="About__Inner container-xxl">
        <h1 className="About__Info">
          Hi,
          <br /> I'm Oumaima,
          <br />A<span className="typewriter"> {currentRole}</span>
        </h1>
        <Lottie
          className="About__AnimationSection"
          animationData={animationData}
        />
      </div>
    </div>
  );
};

export default About;
