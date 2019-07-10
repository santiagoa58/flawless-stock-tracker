import * as React from 'react';
import { SearchContainer } from '../search/searchInputContainer';
import { CompanyTags } from '../tags/company-tags';
import { Overview, Quote } from '../../util';

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
}: Header) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        {latestPrice && <span>Price: {latestPrice}</span>}{' '}
        {changePercent && <span>Change: {changePercent}</span>}
      </div>
      <SearchContainer
        companyName={companyName ? companyName : null}
        symbol={symbol ? symbol : null}
      />
      {sector && <CompanyTags sector={sector} exchange={exchange} />}
    </>
  );
};
