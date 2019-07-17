import * as React from 'react';

import { createSuggestions } from '../../util/suggestions/create-suggestions';
import { sanitizeSearch } from '../../util/sanitizers/search-sanitizer';

interface Search {
  search: (symbol: string) => void;
  companyName: string;
  symbol: string;
}

export const SearchInput: React.FC<Search> = ({
  search,
  companyName,
  symbol,
}: Search) => {
  const [searchText, setSearchText] = React.useState('');
  const suggestions = createSuggestions(searchText, 10);
  const options = suggestions.map(({ id, label }) => (
    <option key={id}>{label}</option>
  ));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    search(sanitizeSearch(searchText));

    setSearchText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <i className="fas fa-search"></i>
      <input
        type="text"
        list="suggestions"
        value={searchText}
        onChange={input => setSearchText(input.target.value)}
        placeholder={companyName ? `${companyName} (${symbol})` : 'Search'}
      />
      <datalist id="suggestions">{options}</datalist>
    </form>
  );
};
