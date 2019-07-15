import * as React from 'react';
import { getDateTimeString, isMarketOpen } from '../../util/marketStatusUtil';

export interface MarketStatusProps {
  dateNow: Date;
}

export const MarketStatus: React.SFC<MarketStatusProps> = ({ dateNow }) => {
  const dateTime: string = getDateTimeString(dateNow);
  const sun = <i className="far fa-sun"></i>;
  const moon = <i className="far fa-moon"></i>;

  return (
    <div>
      <span className="last-update">Real-Time Price as of {dateTime}</span>
      <span>{` `}</span>
      <span>
        {isMarketOpen(dateNow) ? sun : moon} Market{' '}
        {isMarketOpen(dateNow) ? 'Open' : 'Closed'}
      </span>
    </div>
  );
};
