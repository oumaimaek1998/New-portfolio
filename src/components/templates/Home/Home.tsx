import Lottie from "lottie-react";
import { useState, useEffect } from "react";

import animationData from "../../../assets/icons/developer-animation.json";

import "./Home.scss";

interface HomeProps {
  className?: string;
}
/**
 * Home component
 * @returns {JSX.Element}
 */
const Home = ({ className }: HomeProps): JSX.Element => {
  const roles = [
    "React.js Developer",
    "Node.js developer",
    "Full Stack developer",
  ];

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
    <div className={`Home ${className}`}>
      <h1 className="Home__Info">
        Hi,
        <br /> I'm Oumaima,
        <br />A<span className="typewriter"> {currentRole}</span>
      </h1>
      <Lottie
        className="Home__AnimationSection"
        animationData={animationData}
      />
    </div>
  );
};

export default Home;
