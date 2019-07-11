import * as React from 'react';

import { PriceSearchLayout } from '../search-price-layout/priceSearchLayout';
import { CompanyTags } from '../tags/companyTags';
import './header.css';

interface Header {
  title?: string;
  sector?: string;
  exchange?: string;
  latestPrice?: number;
  change?: number;
  changePercent?: number;
  symbol?: string;
  companyName?: string;
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
