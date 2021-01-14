# Middle Javascript Developer (React)

You should create React JS plugin, using only [Typescript](https://www.typescriptlang.org/) and [React Context](https://reactjs.org/docs/context.html), that will return copies in certain language.

Keep away from unnecessary dependecies, keep it simple.

## Getting started

1. Install deps using `yarn` and start plugin using `yarn serve:start`
2. Move in example folder, Install deps using `yarn` and start client using `yarn serve:client`

Imagine, that your application should work in different languages, that will mean that every text should have variant for every language.

## Necessary interfaces
```tsx
type Locale = string;

interface Translate {
   [translationKey: string]: {
      [language: Locale]: string
   }
}

interface TranslateUtils {
   lang: Locale
   t: (key: string, params?: { [key: string]: string }) => string
}
```

## Todo:
1. Create root component, that will expect **Translate** and **Locale**
   - add verification if in **Translate** every translation has translation variant for every language.
2. Root component should save **Translate** and **Locale** in [React Context](https://reactjs.org/docs/context.html)
3. Create HOOK that will return **TranslateUtils**
   - where lang will be current **language** and **t** will be function that recieve key of translate and returns text in necessary language.
4. Add possibility to use templates in **t**
   - One of example that you'll should do is 
   'Hello, {name}. How did you sleep, {name}?' that will replaced automatically with 'Hello, ... How did you sleep, ...' (the '...' will be text that you passed in **t**)
