import classNames from "classnames";
import { useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";

import { selectTheme, setTheme } from "../../../app/features/appSlice";
import { useAppSelector } from "../../../app/hooks";
import { THEME } from "../../../app/utils/enum";
import { ReactComponent as DarkModeLogo } from "../../../assets/svg/dark-mode.svg";
import { ReactComponent as LightModeLogo } from "../../../assets/svg/light-mode.svg";
import BurgerMenu from "../../atoms/BurgerMenu/BurgerMenu";

import OffcanvasMenu from "./OffCanvas/HeaderOffcanvasMenu";

import "./Header.scss";

export interface MenuItem {
  label: string;
  link: string;
}

/**
 * Header component
 * @returns {JSX.Element}
 */
const Header = (): JSX.Element => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const theme = useAppSelector(selectTheme);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleChangeTheme = (theme: THEME) => {
    dispatch(setTheme(theme));
    localStorage.setItem("theme", theme);
  };

  const menuItems: MenuItem[] = [
    { label: intl.formatMessage({ id: "app.menu.home" }), link: "/" },
    { label: intl.formatMessage({ id: "app.menu.about" }), link: "/about" },
    { label: intl.formatMessage({ id: "app.menu.blog" }), link: "/blog" },
    { label: intl.formatMessage({ id: "app.menu.contact" }), link: "/contact" },
  ];

  return (
    <header className="Header shadow-sm">
      <Navbar container="xxl">
        <Link to="/" className="Header__NavbarLogo">
          OUMAIMA
        </Link>

        <div className="Header__Menu">
          {theme === THEME.DARK ? (
            <DarkModeLogo
              className="Header__Menu__DarkMode"
              onClick={() => handleChangeTheme(THEME.LIGHT)}
            />
          ) : (
            <LightModeLogo
              className="Header__Menu__LightMode"
              onClick={() => handleChangeTheme(THEME.DARK)}
            />
          )}

          <BurgerMenu
            toggle={toggle}
            className={classNames("Header__BurgerMenu", {
              isChecked: isOpen,
            })}
          />
        </div>

        <OffcanvasMenu isOpen={isOpen} toggle={toggle} items={menuItems} />
      </Navbar>
    </header>
  );
};

export default Header;
