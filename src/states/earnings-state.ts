import { Earnings, FetchError } from '../util';

export interface EarningsState {
  payload: Earnings;
  error: FetchError;
  isLoading?: boolean;
}

export const EarningsDefaultState: EarningsState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
