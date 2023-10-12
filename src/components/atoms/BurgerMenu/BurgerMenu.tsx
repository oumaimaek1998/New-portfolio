import classNames from "classnames";
import "./BurgerMenu.scss";

interface BurgerMenuProps {
  toggle: () => void;
  className?: string;
}

/**
 * BurgerMenu component
 * @returns {JSX.Element}
 */
const BurgerMenu = ({ toggle, className }: BurgerMenuProps): JSX.Element => (
  <div className={classNames(className, "BurgerMenu")}>
    <input className="BurgerMenu__toggle" type="checkbox" onChange={toggle} />
    <div className="BurgerMenu__Lines">
      <div />
    </div>
  </div>
);

export default BurgerMenu;
