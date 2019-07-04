import { fetchIex } from './services/fetch-iex';
import {
  PUBLIC_SERVICE,
  PRIVATE_SERVICE,
  ServiceConfiguration,
} from './services/configurations';
import { QueryParameters } from './services/types';
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
  range: string = ''
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
  queryVariables?: QueryParameters<string>
): Promise<KeyStats> =>
  genericFetch<KeyStats>(
    PRIVATE_SERVICE,
    `stock/${companySymbol}/stats/${stat}`,
    queryVariables
  );

export const fetchPeers = (companySymbol: string): Promise<Peers> =>
  genericFetch<Peers>(PRIVATE_SERVICE, `stock/${companySymbol}/peers`);

export const fetchOverview = (companySymbol: string): Promise<Overview> =>
  genericFetch<Overview>(PRIVATE_SERVICE, `stock/${companySymbol}/company`);

export const fetchQuote = (
  companySymbol: string,
  queryVariables?: QueryParameters<string>
): Promise<Quote> =>
  genericFetch<Quote>(
    PRIVATE_SERVICE,
    `stock/${companySymbol}/quote`,
    queryVariables
  );

export const fetchEarnings = (
  companySymbol: string,
  timePeriod?: number,
  queryVariables?: QueryParameters<string>
): Promise<Earnings> =>
  genericFetch<Earnings>(
    PRIVATE_SERVICE,
    `stock/${companySymbol}/earnings/${timePeriod}`,
    queryVariables
  );

const genericFetch = <T>(
  config: ServiceConfiguration,
  endpoint: string,
  queryVariables?: QueryParameters<string>
): Promise<T> => {
  return fetchIex<T>(config, endpoint, queryVariables);
};
