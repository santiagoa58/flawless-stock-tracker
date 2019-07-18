import { Quote } from '../util';
import { FetchError } from '../action-creators';

export interface QuoteState {
  payload: Quote;
  error: FetchError;
  isLoading?: boolean;
}

export const quoteDefaultState: QuoteState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
