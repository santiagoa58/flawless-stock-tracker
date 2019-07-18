import { EARNINGS_ACTIONS_TYPES } from './constants';
import { Earnings, fetchEarnings } from '../util';
import {
  createAction,
  createThunkAction,
  FetchError,
  FluxStandardAction,
} from '../action-creators';

export type EarningsAction = FluxStandardAction<
  EARNINGS_ACTIONS_TYPES,
  Earnings,
  FetchError
>;

export const earningsActions = {
  setPayload: (type: EARNINGS_ACTIONS_TYPES, payload: Earnings) =>
    createAction({ type, payload }),
  setError: (type: EARNINGS_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: EARNINGS_ACTIONS_TYPES) => createAction({ type }),
  getData: (companySymbol: string) =>
    createThunkAction(
      fetchEarnings(companySymbol),
      earningsActions,
      EARNINGS_ACTIONS_TYPES
    ),
};
