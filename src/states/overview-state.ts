import { Overview } from '../util';
import { FetchError } from '../actions/defaults';

export interface OverviewState {
  overview?: Overview;
  error?: FetchError;
  isLoading?: boolean;
}

export const overviewDefaultState: OverviewState = {
  overview: undefined,
  error: undefined,
  isLoading: false,
};
