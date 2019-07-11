import { Quote } from '../util';
import { FetchError } from '../action-creators';

export interface QuoteState {
  quote?: Quote;
  error?: FetchError;
  isLoading?: boolean;
}

export const quoteDefaultState: QuoteState = {
  quote: undefined,
  error: undefined,
  isLoading: false,
};
