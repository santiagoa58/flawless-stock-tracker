import { Quote, FetchError } from '../util';

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
