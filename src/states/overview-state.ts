import { Overview, FetchError } from '../util';

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
