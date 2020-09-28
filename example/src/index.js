import React from 'react';
import { render } from 'react-dom';
import { IntlProvider, useIntl } from 'ebs-intl';

const App = () => {
  const { t, lang } = useIntl();

  console.log(lang);
  return <div>{t('greeting', { name: 'EBS' })}</div>;
};

const translate = {
  greeting: {
    en: 'Hello, {name}!',
  },
};

render(
  <IntlProvider translate={translate} locale="en">
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
