import React, { useState } from 'react';
import { render } from 'react-dom';
import { useIntl, useUtils } from 'ebs-intl';
import { Header, Main } from './components';
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

  return (
    <LocaleProvider language={language} getLocale={getLocale}>
      <Header languageOptions={languageOptions} />
      <Main text={t(translationKey)} />
      <div>
        {t("Hi, {name}. Looks like you're {age} and live in {country}.", {
          name: 'John',
          age: 24,
          country: 'Honduras',
        })}
        <br />
        {t('Howdy, {partner}. Why so {mood}?', {
          partner: 'Jane',
          mood: 'grumpy',
        })}
      </div>
    </LocaleProvider>
  );
};

render(<App />, document.getElementById('root'));
