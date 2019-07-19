import { Earnings, FetchError } from '../util';

export interface EarningsState {
  payload: Earnings | undefined;
  error: FetchError | undefined;
  isLoading?: boolean;
}

export const EarningsDefaultState: EarningsState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
