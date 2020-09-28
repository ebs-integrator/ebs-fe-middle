import React, { PropsWithChildren, createContext, useContext, useMemo } from 'react';

interface Translate {
  [translationKey: string]: {
    [language in Locale]: string;
  };
}

type Locale = 'ro' | 'en' | 'ru';

interface TranslateUtils {
  lang: Locale;
  t: (key: string, params?: { [key: string]: string }) => string;
}

const IntlContext = createContext<TranslateUtils | undefined>(undefined);

type Props = PropsWithChildren<{
  translate: Translate;
  locale: Locale;
}>;

export function IntlProvider(props: Props) {
  const { children, translate, locale } = props;

  const utils = useMemo<TranslateUtils>(
    () => ({
      lang: locale,
      t: (key, params) => getTranslation(translate, locale, key, params),
    }),
    [locale, translate],
  );

  return <IntlContext.Provider value={utils}>{children}</IntlContext.Provider>;
}

export function useIntl(): TranslateUtils {
  const context = useContext(IntlContext);

  if (!context) {
    throw new Error('useIntl must be used inside IntlProvider');
  }

  return context;
}

function getTranslation(translate: Translate, locale: Locale, key: string, params: any) {
  if (!translate?.[key]?.[locale]) {
    console.warn(`Missing translation for Key: ${key} Locale: ${locale}`);
    return `${key}:${locale}`;
  }

  return translate[key][locale].replace(/{\w+}/g, (match) => {
    const arg = match.replace(/\{|\}/g, '');
    return params[arg] ?? match;
  });
}
