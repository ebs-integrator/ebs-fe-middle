import React, { useState } from 'react';
import { render } from 'react-dom';
import { useIntl, useUtils } from 'ebs-intl';
import { FormattedText, Header, Main } from './components';
import { dictionary, LocaleProvider, supportedLanguages } from './utils';

// Add your translation keys and locales to the dictionary first
const translationKey = 'greet';
const languageOptions = Object.entries(supportedLanguages).map(([key, { name, id }]) => ({
  value: key,
  label: name,
  id,
}));

const App = () => {
  const [lang, setLanguage] = useState(localStorage.getItem('displayLanguage') || 'ru');
  useIntl(dictionary, supportedLanguages);
  const { language, t } = useUtils(lang); // t -> intl closure
  const getLocale = (newLanguage) => setLanguage(newLanguage);
  const { config, myMessage } = supportedLanguages[language]?.messages;

  return (
    <LocaleProvider language={language} getLocale={getLocale}>
      <Header languageOptions={languageOptions} />
      <Main text={t(translationKey)} />
      <FormattedText values={{text: t(myMessage, config)}} />
    </LocaleProvider>
  );
};

render(<App />, document.getElementById('root'));
