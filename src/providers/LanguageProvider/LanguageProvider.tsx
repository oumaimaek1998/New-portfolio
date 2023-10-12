import { ReactNode } from "react";
import { IntlProvider } from "react-intl";

import { selectTranslations, selectLang } from "../../app/features/i18nSlice";
import { useAppSelector } from "../../app/hooks";

interface LanguageProviderProps {
  children: ReactNode;
}
const LanguageProvider = ({ children }: LanguageProviderProps): JSX.Element => {
  const lang = useAppSelector(selectLang);
  const translations = useAppSelector(selectTranslations);

  return (
    <IntlProvider locale={lang} messages={translations}>
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
