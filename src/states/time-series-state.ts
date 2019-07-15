import { TimeSeries, TimeSeriesRange } from '../util';
import { FetchError } from '../action-creators';

export type TimeSeriesData = {
  [key in TimeSeriesRange]: TimeSeries;
};

export interface TimeSeriesState extends TimeSeriesData {
  error?: FetchError;
  isLoading?: boolean;
}

export const timeSeriesDefaultState: TimeSeriesState = {
  ['1d']: [],
  ['1m']: [],
  ['5dm']: [],
  ['1y']: [],
  ['5y']: [],
  ['max']: [],
  error: undefined,
  isLoading: false,
};
