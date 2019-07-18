import { Overview } from '../util';
import { FetchError } from '../action-creators';

export interface OverviewState {
  payload: Overview;
  error: FetchError;
  isLoading?: boolean;
}

export const overviewDefaultState: OverviewState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
