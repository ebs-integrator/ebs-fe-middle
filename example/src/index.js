import React, { useState } from 'react'
import { render } from 'react-dom'
import { useIntl } from 'ebs-intl'

import Select from './components/select'
import './assets/App.css'

const langs = {
  en: 'English',
  ru: 'Русский',
  ro: 'Română'
},
  langOptions = Object.keys(langs).map(lang => ({ value: lang, label: langs[lang] }))

const App = () => {
  const [name, setName] = useState(localStorage.getItem('name') || false),
    [lang, setLang] = useState(localStorage.getItem('lang') || 'en'),
    t = useIntl({
      lang: lang
    })

  if(!name) {
    const newName = prompt("Please enter your name", "");

    if (newName !== null || newName !== "") {
      setName(newName)
    }
  }

  return (
    <>
      <header>
        {t(`Current language is {$1}`, [langs[lang]])}

        <Select
          options={langOptions}
          selectedOption={lang}
          onChange={(val) => {
            val = val.currentTarget.value
            localStorage.setItem('lang', val)
            setLang(val)
          }}
        />

        <div>{t(`Hello, {$1}`, [name])}</div>
      </header>
    </>
  );
};

render(<App />, document.getElementById('root'));
