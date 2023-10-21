import { ReactNode } from "react";
import { IntlProvider } from "react-intl";

import { selectLang } from "../../app/features/i18nSlice";
import { useAppSelector } from "../../app/hooks";
import translations from "../../i18n/translations";

interface LanguageProviderProps {
  children: ReactNode;
}
const LanguageProvider = ({ children }: LanguageProviderProps): JSX.Element => {
  const lang = useAppSelector(selectLang);

  return (
    <IntlProvider locale={lang} messages={translations[lang]}>
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
