import * as companies from './symbols.json';
import { sanitizeLabel } from '../sanitizers';

export const createSuggestions = (input: string, limit: number = 10) => {
  const upperCaseInput = input.toUpperCase();
  const suggestions = [];
  for (let company of companies) {
    const { name, symbol, iexId } = company;
    const startsWithInput =
      symbol.startsWith(upperCaseInput) ||
      (name || '').toUpperCase().startsWith(upperCaseInput);
    if (startsWithInput) {
      const suggestion: Suggestion = {
        label: `${sanitizeLabel(name)} (${symbol})`,
        id: iexId,
        symbol,
      };
      suggestions.push(suggestion);
      if (suggestions.length === limit) {
        return suggestions;
      }
    }
  }
  return suggestions;
};

export interface Suggestion {
  label: string;
  id: string;
  symbol: string;
}
