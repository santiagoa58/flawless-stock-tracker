import * as React from 'react';

import { SearchOptions } from './searchOptions';
import {
  sanitizeLabel,
  sanitizeSearch,
  createSuggestions,
  getSuggestionOrSearchText,
} from '../../util';

export const SearchInput = ({ search, companyName, symbol }: SearchProps) => {
  const [searchText, setSearchText] = React.useState('');
  const listName = 'suggestions';
  const suggestions = createSuggestions(searchText, 10);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const term = getSuggestionOrSearchText(suggestions, searchText);
    if (!term) {
      return;
    }
    search(sanitizeSearch(term));
    setSearchText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <i onClick={handleSubmit} className="fas fa-search"></i>
      <input
        type="text"
        list={listName}
        value={searchText}
        onChange={input => setSearchText(input.target.value)}
        placeholder={
          companyName ? `${sanitizeLabel(companyName)} (${symbol})` : 'Search'
        }
      />
      <SearchOptions suggestions={suggestions} listName={listName} />
    </form>
  );
};

interface SearchProps {
  search: (symbol: string) => void;
  companyName: string;
  symbol: string;
}
