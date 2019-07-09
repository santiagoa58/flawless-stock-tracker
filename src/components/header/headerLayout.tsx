import * as React from 'react';
import { SearchContainer } from '../search/searchInputContainer';
import { Overview, KeyStats } from '../../util';

interface Header {
  title: string;
  overview: Overview;
  keyStats: KeyStats;
}

export const HeaderLayout: React.FunctionComponent<Header> = ({
  title,
  overview,
  keyStats,
}: Header) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        {keyStats && <span>Price: {keyStats.latestPrice}</span>}{' '}
        {keyStats && <span>Change: {keyStats.changePercent}</span>}
      </div>
      <SearchContainer
        companyName={overview ? overview.companyName : null}
        symbol={overview ? overview.symbol : null}
      />
    </>
  );
};
