import * as React from 'react';
import { Header } from './headerSelector';
import { PriceSearchLayout } from '../layout-components/priceSearchLayout';
import { CompanyTags } from '../tags/companyTags';
import { LogoTabsLayout } from '../layout-components/logoTabsLayout';
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
  <div className="header-wrapper">
    <LogoTabsLayout />
    <PriceSearchLayout
      latestPrice={latestPrice}
      change={change}
      changePercent={changePercent}
      symbol={symbol}
      companyName={companyName}
    />
    {sector && <CompanyTags sector={sector} exchange={exchange} />}
  </div>
);
