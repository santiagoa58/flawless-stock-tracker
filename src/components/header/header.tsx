import * as React from 'react';
import { HeaderProps } from './headerSelector';
import { CompanyTags } from '../tags/companyTags';
import { MarketStatus } from '../market-status/marketStatus';
import { isMarketOpen } from '../../util/marketStatusUtil';
import { AdaptiveLogo } from './adaptiveLogo';
import { SearchContainer } from '../search/searchInputContainer';
import { TickerPrice } from '../ticker-price/tickerPrice';
import './header.css';

interface HeaderFunctionsProps {
  getLatestUpdate: (symbol: string) => void;
  getFavorites: () => void;
}

type HeaderLayoutProps = HeaderFunctionsProps & HeaderProps;

export const Header: React.FunctionComponent<HeaderLayoutProps> = ({
  latestPrice,
  change,
  changePercent,
  sector,
  exchange,
  companyName,
  symbol,
  timeOfLatestUpdate,
  getLatestUpdate,
  getFavorites,
}) => {
  const tabsAndLogo = (
    <div className="header-wrapper--top">
      <AdaptiveLogo />
      <div className="header-tabs">
        <a className="header-tabs--active" href="#">
          QUOTES
        </a>
        <a href="#">MARKETS</a>
        <a href="#">WATCHLISTS</a>
      </div>
    </div>
  );

  const searchLayout = (
    <div className="header__search-layout">
      <SearchContainer
        companyName={companyName ? companyName : undefined}
        symbol={symbol ? symbol : undefined}
      />
      {latestPrice && (
        <TickerPrice
          latestPrice={latestPrice}
          change={change}
          changePercent={changePercent}
        />
      )}
    </div>
  );

  const statusAndTagsLayout = sector && (
    <div className="header-bottom">
      <CompanyTags sector={sector} exchange={exchange} />
      <MarketStatus timeOfLatestUpdate={timeOfLatestUpdate} />
    </div>
  );

  React.useEffect(() => {
    const intervalID = setInterval(() => {
      if (isMarketOpen(timeOfLatestUpdate)) {
        if (symbol) getLatestUpdate(symbol);
        getFavorites();
      }
    }, 5000);
    return () => clearInterval(intervalID);
  }, [symbol]);

  return (
    <div className="header-wrapper">
      {tabsAndLogo}
      {searchLayout}
      {statusAndTagsLayout}
    </div>
  );
};
