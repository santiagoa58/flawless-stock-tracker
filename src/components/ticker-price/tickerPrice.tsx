import * as React from 'react';

interface PriceOutputProps {
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
    <div className={`header__price ${priceStatus}`}>
      <span>
        <span className="icon--small">$</span>
        {latestPrice}
      </span>
      <div className="header__price--change">
        <span>
          <span className="icon--small">
            {isNegative ? '\u2193' : '\u2191'}
          </span>
          {Math.abs(change)}
        </span>
        <span>
          {Math.abs(changePercent * 100).toFixed(2)}
          <span className="icon--small">%</span>
        </span>
      </div>
    </div>
  );
};
