import {
  fetchIex,
  DEV_SERVICE,
  PRIVATE_SERVICE,
  ServiceConfiguration,
} from './services';
import { MapObject, TimeSeriesRange } from './types';
import {
  TimeSeries,
  Quote,
  Earnings,
  KeyStats,
  Peers,
  Overview,
  News,
} from './entities';

export const fetchTimeSeries = (
  companySymbol: string,
  range: TimeSeriesRange = TimeSeriesRange.max,
  parameter: MapObject<string>
): Promise<TimeSeries> => {
  return genericFetch<TimeSeries>(
    DEV_SERVICE,
    `stock/${companySymbol}/chart/${range}`,
    parameter
  );
};

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
    `stock/${companySymbol}/earnings/${timePeriod ? timePeriod : 1}`,
    parameters
  );

const genericFetch = <T>(
  config: ServiceConfiguration,
  path: string,
  parameters?: MapObject<string>
): Promise<T> => {
  return fetchIex<T>(config, path, parameters);
};
