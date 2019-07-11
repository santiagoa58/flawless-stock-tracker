import * as React from 'react';
import { isNull } from 'util';

interface Search {
  search: (symbol: string) => void;
  companyName: string;
  symbol: string;
}

export const SearchInput: React.FunctionComponent<Search> = ({
  search,
  companyName,
  symbol,
}: Search) => {
  const [searchText, setSearchText] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    search(searchText);

    setSearchText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <i className="fas fa-search"></i>
      <input
        type="text"
        value={searchText}
        onChange={input => setSearchText(input.target.value)}
        placeholder={
          isNull(companyName) ? 'search' : `${companyName} (${symbol})`
        }
      />
    </form>
  );
};
