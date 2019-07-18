import { Earnings } from '../util';
import { FetchError } from '../action-creators';

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
