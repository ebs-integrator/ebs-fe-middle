# Middle Javascript Developer (React)

It's necessary to create React JS plugin, using only [Typescript](https://www.typescriptlang.org/) and [React Context](https://reactjs.org/docs/context.html), that will return copies in certain language.

Keep away from unnecessary dependecies, keep it simple.

## Getting started

1. Start plugin using `yarn serve:start`
2. Start client for example from **example** folder using `yarn serve:client`

## Todo:

1. Get list of copies (translates) passed through props and save them in context.
2. Add possibility to change current language.
3. Add possibility to find out current language.
4. Add possibility to get translate for current language using keyword of copy.
5. Add possibility to use templates
   For example 'Hello, {name}' copy will return 'Hello, ...' and text that will be passed using arguments.
   
## Notes:
I want to notice that it should be plugin solution, it should work indeferent the type of project, it has to recieve copies, and serve necessary copy.
