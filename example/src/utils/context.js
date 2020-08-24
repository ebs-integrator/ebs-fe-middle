import React from 'react';

export const LocaleContext = React.createContext();

export function LocaleProvider({ children, language, getLocale }) {
  return (
    <LocaleContext.Provider
      value={{
        language,
        getLocale,
      }}
    >
      { children }
    </LocaleContext.Provider>
  );
}
