import * as React from 'react';

import './footer.css';
import { TickerPrice } from '../ticker-price/tickerPrice';
import { FavoritesListContainer } from './favoritesListContainer';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__markets">
        <h3>US MARKET</h3>
        <ul>
          <li>
            <div>
              <span className="footer__stock--symbol">NASDAQ</span>
              <TickerPrice
                latestPrice={6850.05}
                change={72.89}
                changePercent={0.0108}
              />
            </div>
          </li>
          <li>
            <div>
              <span className="footer__stock--symbol">DJIA</span>
              <TickerPrice
                latestPrice={23026.35}
                change={165.89}
                changePercent={0.007}
              />
            </div>
          </li>
          <li>
            <div>
              <span className="footer__stock--symbol">{'S&P'}</span>
              <TickerPrice
                latestPrice={2605.35}
                change={23.35}
                changePercent={0.0094}
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="footer__favorites">
        <h3>FAVORITES</h3>
        <FavoritesListContainer />
      </div>
    </div>
  );
};
