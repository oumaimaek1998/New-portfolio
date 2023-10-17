import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import { useIntl } from "react-intl";

import {
  selectLang,
  selectSupportedLangs,
  setLang,
} from "../../../app/features/i18nSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ReactComponent as CaretLogo } from "../../../assets/svg/caret.svg";
import { ReactComponent as CheckedBox } from "../../../assets/svg/checked-box.svg";
import { ReactComponent as FranceLogo } from "../../../assets/svg/france-flag.svg";
import { ReactComponent as LanguageSelectorLogo } from "../../../assets/svg/select-language.svg";
import { ReactComponent as UnCheckedBox } from "../../../assets/svg/unchecked-box.svg";
import { ReactComponent as USLogo } from "../../../assets/svg/us-flag.svg";

import "./LanguageSelector.scss";

interface LanguageSelectorProps {
  className?: string;
}

/**
 * LanguageSelector component
 * @returns {JSX.Element}
 */
const LanguageSelector = ({
  className,
}: LanguageSelectorProps): JSX.Element => {
  const intl = useIntl();
  const dispatch = useAppDispatch();

  const lang = useAppSelector(selectLang);
  const supportedLangs = useAppSelector(selectSupportedLangs);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => setIsOpen(false);

  const language = intl.formatMessage({
    id: `app.header.list.${lang === "en" ? "english" : "french"}.language`,
  });

  const dropdownItems = Object.entries(supportedLangs).map(([lang, label]) => ({
    icon:
      lang === "en" ? (
        <USLogo className="LanguageSelector__Flag" />
      ) : (
        <FranceLogo className="LanguageSelector__Flag" />
      ),
    lang: lang,
    label: label,
    onItemClick: () => {
      dispatch(setLang(lang));
      localStorage.setItem("lang", lang);
      closeDropdown();
    },
  }));

  useEffect(() => {
    // Add a click event listener to the document to close the dropdown when clicking outside
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as HTMLElement)
      ) {
        closeDropdown();
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={classNames("LanguageSelector", className)}
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <LanguageSelectorLogo className="LanguageSelector__WorldIcon" />
      <div className="LanguageSelector__Toggle">
        {language}
        <span
          className={classNames("LanguageSelector__Caret", {
            "LanguageSelector__Caret--isOpen": isOpen,
          })}
        >
          <CaretLogo className="LanguageSelector__CaretIcon" />
        </span>
      </div>

      {isOpen && (
        <div className="LanguageSelector__Dropdown">
          {dropdownItems.map((item, index) => (
            <div
              className="LanguageSelector__DropDownItem"
              key={index}
              onClick={item.onItemClick}
            >
              {item.icon}
              <div className="LanguageSelector__DropDownItem__CheckIcon">
                {item.label}
                {item.lang === lang ? (
                  <CheckedBox className="LanguageSelector__CheckIcon" />
                ) : (
                  <UnCheckedBox className="LanguageSelector__CheckIcon" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
