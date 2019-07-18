import * as React from 'react';

import { SearchOptions } from './searchOptions';
import { sanitizeLabel, sanitizeSearch } from '../../util';

export const SearchInput = ({ search, companyName, symbol }: SearchProps) => {
  const [searchText, setSearchText] = React.useState('');
  const listName = 'suggestions';
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    search(sanitizeSearch(searchText));
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
      <SearchOptions limit={10} symbol={searchText} listName={listName} />
    </form>
  );
};

interface SearchProps {
  search: (symbol: string) => void;
  companyName: string;
  symbol: string;
}
