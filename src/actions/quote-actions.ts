import { QUOTE_ACTIONS_TYPES } from './constants';
import { Quote, fetchQuote, MapObject } from '../util';
import {
  createAction,
  createThunkAction,
  FetchError,
  FluxStandardAction,
} from '../action-creators';

export type QuoteAction = FluxStandardAction<
  QUOTE_ACTIONS_TYPES,
  Quote,
  FetchError
>;

export const quoteActions = {
  setPayload: (type: QUOTE_ACTIONS_TYPES, payload: Quote) =>
    createAction({ type, payload }),
  setError: (type: QUOTE_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: QUOTE_ACTIONS_TYPES) => createAction({ type }),
  getData: (companySymbol: string, parameters?: MapObject<string>) =>
    createThunkAction(
      fetchQuote(companySymbol, parameters),
      quoteActions,
      QUOTE_ACTIONS_TYPES
    ),
};
