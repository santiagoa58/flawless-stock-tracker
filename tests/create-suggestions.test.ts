import { createSuggestions } from '../src/util/suggestions/create-suggestions';

test('Succesfully create 10 suggestions', () => {
  expect(createSuggestions('a', 10)).toHaveLength(10);
});

test('Succesfully create 20 suggestions', () => {
  expect(createSuggestions('a', 20)).toHaveLength(20);
});

test('Succesfully create 1000 suggestions', () => {
  expect(createSuggestions('', 1000)).toHaveLength(1000);
});

test('Succesfully create suggestions when given no input', () => {
  expect(createSuggestions('', 10)).toHaveLength(10);
});

test('Succesfully create suggestions when given no limit', () => {
  expect(createSuggestions('a')).toHaveLength(10);
});

test('Succesfully create suggestion when given no input and no limit', () => {
  expect(createSuggestions('')).toHaveLength(10);
});
