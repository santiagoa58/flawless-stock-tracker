import { Overview, Quote } from '../../util';

export interface Header {
  sector: string;
  exchange: string;
  latestPrice: number;
  change: number;
  changePercent: number;
  symbol: string;
  companyName: string;
}

const defaultSelector: Header = {
  sector: undefined,
  exchange: undefined,
  latestPrice: undefined,
  change: undefined,
  changePercent: undefined,
  companyName: undefined,
  symbol: undefined,
};

export function headerSelector(overview: Overview, quote: Quote) {
  return overview && quote
    ? {
        sector: overview.sector,
        exchange: overview.exchange,
        latestPrice: quote.latestPrice,
        change: quote.change,
        changePercent: quote.changePercent,
        companyName: quote.companyName,
        symbol: overview.symbol,
      }
    : defaultSelector;
}
