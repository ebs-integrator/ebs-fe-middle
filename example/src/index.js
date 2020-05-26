import React from 'react';
import { render } from 'react-dom';
import { useIntl } from 'ebs-intl';

const App = () => {
  const t = useIntl();

  return <div>{t('greeting')}</div>;
};

render(<App />, document.getElementById('root'));
