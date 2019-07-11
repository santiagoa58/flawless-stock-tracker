import { Reducer } from 'redux';

import { QuoteAction, QUOTE_ACTIONS_TYPES } from '../actions';
import { QuoteState, quoteDefaultState } from '../states';

export const quoteReducer: Reducer<QuoteState, QuoteAction> = (
  state: QuoteState = quoteDefaultState,
  { type, payload, error }: QuoteAction
): QuoteState => {
  const { resolve, reject, get } = QUOTE_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, quote: payload, isLoading: false };
    case reject:
      return { ...state, error: error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
