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
  setPayload: (type: QUOTE_ACTIONS_TYPES, payload: Quote) =>
    createAction({ type, payload }),
  setError: (type: QUOTE_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: QUOTE_ACTIONS_TYPES) => ({ type }),
  getData: (companySymbol: string, parameters?: MapObject<string>) =>
    createThunkAction(
      fetchQuote(companySymbol, parameters),
      quoteActions,
      QUOTE_ACTIONS_TYPES
    ),
};
