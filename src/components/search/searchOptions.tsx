import * as React from 'react';

import { Suggestion } from '../../util';

export const SearchOptions = ({
  suggestions,
  listName,
}: SearchOptionsProps) => {
  const options = suggestions.map(({ label, id }) => (
    <option key={id}>{`${label}`}</option>
  ));
  return <datalist id={listName}>{options}</datalist>;
};

interface SearchOptionsProps {
  listName: string;
  suggestions: Suggestion[];
}
