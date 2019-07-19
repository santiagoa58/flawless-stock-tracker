import { Overview, Quote } from '../../util';

export interface HeaderProps {
  sector: string | undefined;
  exchange: string | undefined;
  latestPrice: number | undefined;
  change: number | undefined;
  changePercent: number | undefined;
  symbol: string | undefined;
  companyName: string | undefined;
  timeOfLatestUpdate: number | undefined;
}

const defaultSelector: HeaderProps = {
  sector: undefined,
  exchange: undefined,
  latestPrice: undefined,
  change: undefined,
  changePercent: undefined,
  companyName: undefined,
  symbol: undefined,
  timeOfLatestUpdate: Date.now(),
};

export function headerSelector(
  overview: Overview | undefined,
  quote: Quote | undefined
) {
  return overview && quote
    ? {
        sector: overview.sector,
        exchange: overview.exchange,
        latestPrice: quote.latestPrice,
        change: quote.change,
        changePercent: quote.changePercent,
        companyName: quote.companyName,
        symbol: overview.symbol,
        timeOfLatestUpdate: quote.latestUpdate,
      }
    : defaultSelector;
}
