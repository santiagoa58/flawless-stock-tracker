import { Suggestion } from './create-suggestions';

export const getSuggestionOrSearchText = (
  suggestions: Suggestion[],
  searchText: string
) => {
  if (
    (suggestions.length === 0 && !searchText.includes('(')) ||
    searchText === ''
  ) {
    return;
  }
  return suggestions.length > 0 ? suggestions[0].symbol : searchText;
};
