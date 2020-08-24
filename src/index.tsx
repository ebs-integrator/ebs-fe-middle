import { useEffect, useState } from 'react';
import format from './format';
interface Translate {
  [translationKey: string]: {
    [language: string]: string;
  };
}
interface Languages {
  [translationKey: string]: {
    id: number;
    name: string;
  };
}
interface TranslateUtils {
  language: Locale;
  t: (key: string, params?: { [key: string]: string }) => string;
}

type Locale = 'ro' | 'en' | 'ru';

let dictionary: Translate;
const isFullLocale = (arr: string[], target: string[]): boolean => target.every((value) => arr.includes(value));

export const useUtils = (lng: Locale): TranslateUtils => {
  const [language, setLocale] = useState(lng);
  let text: string;

  useEffect(() => {
    setLocale(lng);
  }, [lng]);

  const getText = (key: string, params?: { [key: string]: string }): string => {
    const templateArr = key.match(/\{(.*?)\}/);
    if (templateArr?.length && params) {
      text = format(key, params, 'en');
      return text;
    }
    try {
      text = dictionary[key][lng];
    } catch (error) {
      throw new Error("Translation key doesn't exist");
    }
    return text;
  };
  return {
    language,
    t: (key: string, params?: { [key: string]: string }): string => getText(key, params),
  };
};

export const useIntl = (t: Translate, l: Languages): void => {
  for (const key in t) {
    const fullLocale = isFullLocale(Object.keys(t[key]), Object.keys(l));
    if (!fullLocale) {
      console.error(`Please add full localization for ${key} key`);
    }
  }
  dictionary = t;
};
