import React, { useContext } from 'react';
import { LocaleContext } from '../utils/context';

export const Header = ({ languageOptions }) => {
  const { language, getLocale } = useContext(LocaleContext);
  return (
    <header>
      <select
        value={language}
        onChange={({ target: { value } }) => {
          localStorage.setItem('displayLanguage', value);
          getLocale(value);
        }}
      >
        {languageOptions.map(({ id, label, value }) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </select>
      <hr />
    </header>
  );
};
