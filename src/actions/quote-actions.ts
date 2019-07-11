import { QUOTE_ACTIONS_TYPES } from './constants';
import { Quote, fetchQuote, MapObject } from '../util';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from '../action-creators';

export type QuoteAction = ActionType<QUOTE_ACTIONS_TYPES, Quote>;

export const quoteActions = {
  setQuote: (type: QUOTE_ACTIONS_TYPES.SET_QUOTE, payload: Quote) =>
    createAction({ type, payload }),
  setQuoteError: (
    type: QUOTE_ACTIONS_TYPES.SET_QUOTE_ERROR,
    error: FetchError
  ) => createAction({ type, error }),
  getData: (companySymbol: string, parameters: MapObject<string>) => {
    const { setQuote, setQuoteError } = quoteActions;
    createThunkAction(
      fetchQuote(companySymbol, parameters),
      setQuote,
      setQuoteError
    );
  },
};
