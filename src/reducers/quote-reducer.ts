import { QuoteAction, QUOTE_ACTIONS_TYPES } from '../actions';
import { quoteDefaultState } from '../states';

export const quoteReducer = (
  state = quoteDefaultState,
  { type, payload, error }: QuoteAction
) => {
  const { resolve, reject, get } = QUOTE_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, payload, isLoading: false };
    case reject:
      return { ...state, error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
