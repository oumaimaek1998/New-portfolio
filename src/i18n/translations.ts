import en_translations from "./en.json";
import fr_translations from "./fr.json";

export default {
  en: en_translations,
  fr: fr_translations,
} as {
  [key: string]: Record<string, string>;
};
