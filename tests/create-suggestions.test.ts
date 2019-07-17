import { createSuggestions } from '../src/util/suggestions/create-suggestions';

test('Succesfully create 20 suggestions', () => {
  expect(createSuggestions('a', 20)).toHaveLength(20);
});

test('Succesfully create 10 suggestions', () => {
  expect(createSuggestions('a', 10)).toHaveLength(10);
});
