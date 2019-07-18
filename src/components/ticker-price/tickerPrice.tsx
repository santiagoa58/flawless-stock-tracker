import * as React from 'react';
import './ticker-price.css';

export interface PriceOutputProps {
  latestPrice: number;
  change: number;
  changePercent: number;
}

export const TickerPrice: React.FunctionComponent<PriceOutputProps> = ({
  latestPrice,
  change,
  changePercent,
}: PriceOutputProps) => {
  const isNegative = change <= 0;
  let priceStatus = isNegative ? 'negative' : 'positive';
  return (
    <div className="ticker__price">
      <span>
        <span className="icon--small">$</span>
        {latestPrice.toFixed(2)}
      </span>
      <div className={`ticker__price--change ${priceStatus}`}>
        <span>
          <span className="icon--small">
            {isNegative ? '\u2193' : '\u2191'}
          </span>
          {Math.abs(change).toFixed(2)}
        </span>
        <span>
          {Math.abs(changePercent * 100).toFixed(2)}
          <span className="icon--small">%</span>
        </span>
      </div>
    </div>
  );
};
