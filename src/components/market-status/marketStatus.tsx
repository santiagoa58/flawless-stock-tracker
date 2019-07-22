import * as React from 'react';

import { getDateTimeString, isMarketOpen } from '../../util';

export const MarketStatus = ({ timeOfLatestUpdate }: MarketStatusProps) => {
  const dateTime: string = getDateTimeString(
    new Date(Number(timeOfLatestUpdate))
  );
  const sun = <i className="far fa-sun"></i>;
  const moon = <i className="far fa-moon"></i>;

  return timeOfLatestUpdate ? (
    <div>
      <span className="last-update">Real-Time Price as of {dateTime}</span>
      <span>{` `}</span>
      <span>
        {isMarketOpen(timeOfLatestUpdate) ? sun : moon} Market{' '}
        {isMarketOpen(timeOfLatestUpdate) ? 'Open' : 'Closed'}
      </span>
    </div>
  ) : (
    <div>
      <span>Time Of Last Update Is Not Available</span>
    </div>
  );
};

export interface MarketStatusProps {
  timeOfLatestUpdate: number | undefined;
}
