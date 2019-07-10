import { QUOTE_ACTIONS_TYPES } from './constants';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from './defaults';
import { Quote, fetchQuote } from '../util';
import { MapObject } from '../util/services/types';

export const QuoteActions = {
  setQuote: (type: QUOTE_ACTIONS_TYPES.SET_QUOTE, payload: Quote) =>
    createAction({ type, payload }),
  setQuoteError: (
    type: QUOTE_ACTIONS_TYPES.SET_QUOTE_ERROR,
    error: FetchError
  ) => createAction({ type, error }),
};

export const getQuote = (
  companySymbol: string,
  parameters?: MapObject<string>
) => {
  const { setQuote, setQuoteError } = QuoteActions;
  createThunkAction(
    fetchQuote(companySymbol, parameters),
    setQuote,
    setQuoteError
  );
};

export type QuoteAction = ActionType<Quote>;
