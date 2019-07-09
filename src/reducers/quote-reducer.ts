import { Reducer } from 'redux';
import { QuoteAction } from '../actions/quote-actions';
import { Quote } from '../util/';
import {
  SET_KEY_STATS,
  GET_KEY_STATS,
  SET_KEY_STATS_ERROR,
} from '../actions/constants';

export interface QuoteState {
  quote: Quote;
  error: string | undefined;
  isLoading: boolean;
}

export const defaultState: QuoteState = {
  quote: undefined,
  error: undefined,
  isLoading: false,
};

export const quoteReducer: Reducer<QuoteState, QuoteAction> = (
  state: any = defaultState,
  { type, payload }: QuoteAction
): QuoteState => {
  switch (type) {
    case SET_KEY_STATS:
      return { ...state, quote: payload, isLoading: false };
    case SET_KEY_STATS_ERROR:
      return { ...state, error: payload, isLoading: false };
    case GET_KEY_STATS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
