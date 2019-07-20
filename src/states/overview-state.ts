import { Overview, FetchError } from '../util';

export interface OverviewState {
  payload: Overview | undefined;
  error: FetchError | undefined;
  isLoading?: boolean;
}

export const overviewDefaultState: OverviewState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
