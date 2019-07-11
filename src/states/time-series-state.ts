import { FetchError } from '../actions/defaults';
import { TimeSeries } from '../util';

export interface TimeSeriesState {
  timeSeries?: TimeSeries;
  error?: FetchError;
  isLoading?: boolean;
}

export const timeSeriesDefaultState: TimeSeriesState = {
  timeSeries: undefined,
  error: undefined,
  isLoading: false,
};
