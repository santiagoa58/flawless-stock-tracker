import * as React from 'react';

import './ticker-price.css';

export const TickerPrice = ({
  latestPrice,
  change,
  changePercent,
}: PriceOutputProps) => {
  const isNegative = change ? change <= 0 : undefined;
  const priceStatus = isNegative ? 'negative' : 'positive';
  return (
    <div className="ticker__price">
      <span>
        <span className="icon--small">$</span>
        {Number(latestPrice).toFixed(2)}
      </span>
      <div className={`ticker__price--change ${priceStatus}`}>
        <span>
          <span className="icon--small">
            {isNegative ? '\u2193' : '\u2191'}
          </span>
          {Math.abs(Number(change)).toFixed(2)}
        </span>
        <span>
          {Math.abs(Number(changePercent) * 100).toFixed(2)}
          <span className="icon--small">%</span>
        </span>
      </div>
    </div>
  );
};

export interface PriceOutputProps {
  latestPrice: number | undefined;
  change: number | undefined;
  changePercent: number | undefined;
}
