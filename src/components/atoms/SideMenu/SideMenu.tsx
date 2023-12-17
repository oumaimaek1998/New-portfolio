import { useState } from "react";

import "./SideMenu.scss";
import { setActiveSection } from "../../../app/features/appSlice";
import { useAppDispatch } from "../../../app/hooks";

interface SideMenuItem {
  active: boolean;
  label: string;
  section: string;
}

interface SideMenuProps {
  className?: string;
  items: SideMenuItem[];
}

/**
 * SideMenu component
 * @returns {JSX.Element}
 */
const SideMenu = ({ items, className }: SideMenuProps) => {
  const dispatch = useAppDispatch();

  const [lineTop, setLineTop] = useState(0);

  const handleMouseEnter = (sideIndex: number) => {
    setLineTop(sideIndex * 50);
  };

  const handleMouseLeave = () => {
    const activeIndex = items.findIndex((item) => item.active);
    setLineTop(50 * activeIndex);
  };

  const handleItemClick = (label: string, index: number) => {
    setLineTop(index * 50);
    dispatch(setActiveSection(label.toLowerCase()));
  };

  return (
    <nav className={`SideMenu ${className}`}>
      <ul className="SideMenu__List">
        {items.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleItemClick(item.section, index)}
          >
            <a>{item.label}</a>
          </li>
        ))}
        <div className="active" style={{ top: `${lineTop}px` }}></div>
      </ul>
    </nav>
  );
};

export default SideMenu;
