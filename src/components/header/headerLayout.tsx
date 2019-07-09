import * as React from 'react';
import { SearchContainer } from '../search/searchInputContainer';
import { Overview, Quote } from '../../util';

interface Header {
  title: string;
  overview: Overview;
  quote: Quote;
}

export const HeaderLayout: React.FunctionComponent<Header> = ({
  title,
  overview,
  quote,
}: Header) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        {quote && <span>Price: {quote.latestPrice}</span>}{' '}
        {quote && <span>Change: {quote.changePercent}</span>}
      </div>
      <SearchContainer
        companyName={overview ? overview.companyName : null}
        symbol={overview ? overview.symbol : null}
      />
    </>
  );
};
