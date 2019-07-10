import * as React from 'react';
import { SearchContainer } from '../search/searchInputContainer';
import { CompanyTags } from '../tags/companyTags';
import { TickerPrice } from '../ticker-price/tickerPrice';

interface Header {
  title: string;
  sector: string;
  exchange: string;
  latestPrice: number;
  change: number;
  changePercent: number;
  symbol: string;
  companyName: string;
}

export const HeaderLayout: React.FunctionComponent<Header> = ({
  title,
  latestPrice,
  change,
  changePercent,
  sector,
  exchange,
  companyName,
  symbol,
}: Header) => (
  <>
    <h1>{title}</h1>
    {latestPrice && (
      <TickerPrice
        latestPrice={latestPrice}
        change={change}
        changePercent={changePercent}
      />
    )}
    <SearchContainer
      companyName={companyName ? companyName : undefined}
      symbol={symbol ? symbol : undefined}
    />
    {sector && <CompanyTags sector={sector} exchange={exchange} />}
  </>
);
