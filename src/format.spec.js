/* eslint-env jest */
const format = require('./format').default;

const data = {
  name: 'Jake',
  age: '31',
};

it('should return the original message if there is no template', () => {
  expect(format('What is your name?', data)).toEqual('What is your name?');
});

it('should replace name and age', () => {
  expect(format('My name is {name} and I am {age}', data)).toEqual('My name is Jake and I am 31');
});

it('should replace unknown fields with an empty string', () => {
  expect(format('My name is {name} and I am {unknown} years old', data)).toEqual('My name is Jake and I am  years old');
});
