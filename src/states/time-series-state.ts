import { TimeSeries, TimeSeriesRange, FetchError } from '../util';

export type TimeSeriesData = {
  [key in TimeSeriesRange]: TimeSeries | undefined;
};

export interface TimeSeriesState extends TimeSeriesData {
  error: FetchError | undefined;
  isLoading?: boolean;
}

export const timeSeriesDefaultState: TimeSeriesState = {
  ['1d']: [],
  ['5d']: [],
  ['1m']: [],
  ['1y']: [],
  ['5y']: [],
  max: [],
  error: undefined,
  isLoading: false,
};
