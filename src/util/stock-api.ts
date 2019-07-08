import { fetchIex } from './services/fetch-iex';
import {
  PUBLIC_SERVICE,
  PRIVATE_SERVICE,
  ServiceConfiguration,
} from './services/configurations';
import { MapObject, TimeSeriesRange } from './services/types';
import {
  TimeSeries,
  Quote,
  Earnings,
  KeyStats,
  Peers,
  Overview,
  News,
} from './services/entities';

export const fetchTimeSeries = (
  companySymbol: string,
  range: TimeSeriesRange = TimeSeriesRange.max
): Promise<TimeSeries> =>
  genericFetch<TimeSeries>(
    PUBLIC_SERVICE,
    `stock/${companySymbol}/time-series/${range}`
  );

export const fetchNews = (
  companySymbol: string,
  last: number = 5
): Promise<News> =>
  genericFetch<News>(
    PRIVATE_SERVICE,
    `stock/${companySymbol}/news/last/${last}`
  );

export const fetchKeyStats = (
  companySymbol: string,
  stat?: string,
  parameters?: MapObject<string>
): Promise<KeyStats> =>
  genericFetch<KeyStats>(
    PRIVATE_SERVICE,
    `stock/${companySymbol}/stats/${stat}`,
    parameters
  );

export const fetchPeers = (companySymbol: string): Promise<Peers> =>
  genericFetch<Peers>(PRIVATE_SERVICE, `stock/${companySymbol}/peers`);

export const fetchOverview = (companySymbol: string): Promise<Overview> =>
  genericFetch<Overview>(PRIVATE_SERVICE, `stock/${companySymbol}/company`);

export const fetchQuote = (
  companySymbol: string,
  parameters?: MapObject<string>
): Promise<Quote> =>
  genericFetch<Quote>(
    PRIVATE_SERVICE,
    `stock/${companySymbol}/quote`,
    parameters
  );

export const fetchEarnings = (
  companySymbol: string,
  timePeriod?: number,
  parameters?: MapObject<string>
): Promise<Earnings> =>
  genericFetch<Earnings>(
    PRIVATE_SERVICE,
    `stock/${companySymbol}/earnings/${timePeriod}`,
    parameters
  );

const genericFetch = <T>(
  config: ServiceConfiguration,
  path: string,
  parameters?: MapObject<string>
): Promise<T> => {
  return fetchIex<T>(config, path, parameters);
};
