import { TimeSeries } from '../util';
import { FetchError } from '../action-creators';

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
