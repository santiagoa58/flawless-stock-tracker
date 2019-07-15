import { Earnings } from '../util';
import { FetchError } from '../action-creators';

export interface EarningsState {
  earnings?: Earnings;
  error?: FetchError;
  isLoading?: boolean;
}

export const EarningsDefaultState: EarningsState = {
  earnings: undefined,
  error: undefined,
  isLoading: false,
};
