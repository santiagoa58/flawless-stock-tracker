import { Reducer } from 'redux';

import { QuoteAction } from '../actions';
import { QuoteState, quoteDefaultState } from '../states';

export const quoteReducer: Reducer<QuoteState, QuoteAction> = (
  state: QuoteState = quoteDefaultState,
  { type, payload, error }: QuoteAction
): QuoteState => {
  switch (type) {
    case 'SET_QUOTE':
      return { ...state, quote: payload, isLoading: false };
    case 'SET_QUOTE_ERROR':
      return { ...state, error: error, isLoading: false };
    case 'GET_QUOTE':
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
