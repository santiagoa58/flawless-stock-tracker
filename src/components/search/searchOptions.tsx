import * as React from 'react';

import { createSuggestions } from '../../util';

export const SearchOptions = ({ limit, symbol }: SearchOptionsProps) => {
  const options = createSuggestions(symbol, limit).map(({ label, id }) => (
    <option key={id}>{`${label}`}</option>
  ));
  return <datalist id="suggestions">{options}</datalist>;
};

interface SearchOptionsProps {
  limit: number;
  symbol: string;
}
