export { LocaleProvider } from './context';
export { default as dictionary } from './dictionary.json';

export const supportedLanguages = {
  en: { id: 1, name: 'English', messages: {
      myMessage: "Hi, {name}. Looks like you're {age} and live in {country}.",
      myOtherMessage: "Test this, {name}!",
      config: {
        name: 'John',
        age: 24,
        country: 'Honduras',
      }
  } },
  ru: { id: 2, name: 'Русский', messages: {
      myMessage: "Привет {name}. Кажется тебе {age} и ты живешь в {country}.",
      myOtherMessage: "",
      config: {
        name: 'Петя',
        age: 25,
        country: 'Гондурас',
      }
  } },
  ro: { id: 3, name: 'Română', messages: {
      myMessage: "Salut {name}. Imi pare ca ai {age} ani si traiesti in {country}.",
      myOtherMessage: "",
      config: {
        name: 'John',
        age: 24,
        country: 'Honduras',
      }
  } },
};
