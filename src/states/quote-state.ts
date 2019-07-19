import { Quote, FetchError } from '../util';

export interface QuoteState {
  payload: Quote | undefined;
  error: FetchError | undefined;
  isLoading?: boolean;
}

export const quoteDefaultState: QuoteState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
