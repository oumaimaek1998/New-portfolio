// OffcanvasMenu.tsx
import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

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
            <Link to={item.link} key={index}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="OffcanvasMenu__separator" />
        <div className="OffcanvasMenu__LanguageSelector">
          <LanguageSelector />
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default HeaderOffcanvasMenu;
