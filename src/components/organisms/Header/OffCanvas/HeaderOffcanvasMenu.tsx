// OffcanvasMenu.tsx
import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

import { ReactComponent as GithubLogo } from "../../../../assets/svg/github.svg";
import { ReactComponent as LinkedinLogo } from "../../../../assets/svg/linkedin.svg";
import LanguageSelector from "../../../molecules/LanguageSelector/LanguageSelector";
import { MenuItem } from "../Header";

import "./HeaderOffcanvasMenu.scss";

interface OffcanvasMenuProps {
  isOpen: boolean;
  toggle: () => void;
  items: MenuItem[];
}

/**
 * HeaderOffcanvasMenu component
 * @returns {JSX.Element}
 */
const HeaderOffcanvasMenu: React.FC<OffcanvasMenuProps> = ({
  isOpen,
  toggle,
  items,
}): JSX.Element => {
  const intl = useIntl();

  const socialItems = [
    {
      label: "github",
      link: "https://github.com/oumaimaek1998",
      icon: <GithubLogo />,
    },
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/oumaima-elkadiri/",
      icon: <LinkedinLogo />,
    },
  ];

  return (
    <Offcanvas
      container=".Header"
      className="OffcanvasMenu"
      direction="end"
      toggle={toggle}
      isOpen={isOpen}
    >
      <OffcanvasHeader className="OffcanvasMenu__Header" toggle={toggle}>
        {intl.formatMessage({
          id: "app.offcanvas.header",
        })}
      </OffcanvasHeader>
      <div className="OffcanvasMenu__separator" />
      <OffcanvasBody>
        <div className="OffcanvasMenu__items">
          {items.map((item, index) => (
            <Link onClick={toggle} to={item.link} key={index}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="OffcanvasMenu__separator" />
        <div className="OffcanvasMenu__LanguageSelector">
          <LanguageSelector />
        </div>

        <div className="OffcanvasMenu__Social">
          {socialItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="OffcanvasMenu__Social__Icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default HeaderOffcanvasMenu;
