import * as React from 'react';
import { Header } from './headerSelector';
import { PriceSearchLayout } from '../search-price-layout/priceSearchLayout';
import { CompanyTags } from '../tags/companyTags';
import './header.css';

export const HeaderLayout: React.FunctionComponent<Header> = ({
  latestPrice,
  change,
  changePercent,
  sector,
  exchange,
  companyName,
  symbol,
}) => (
  <>
    <PriceSearchLayout
      latestPrice={latestPrice}
      change={change}
      changePercent={changePercent}
      symbol={symbol}
      companyName={companyName}
    />
    {sector && <CompanyTags sector={sector} exchange={exchange} />}
  </>
);
