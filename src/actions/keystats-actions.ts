import { KEY_STATS_ACTIONS_TYPES } from './constants';
import { KeyStats, fetchKeyStats, MapObject } from '../util';
import {
  createAction,
  createThunkAction,
  FetchError,
  FluxStandardAction,
} from '../action-creators';

export type KeyStatsAction = FluxStandardAction<
  KEY_STATS_ACTIONS_TYPES,
  KeyStats,
  FetchError
>;

export const keyStatsActions = {
  setPayload: (type: KEY_STATS_ACTIONS_TYPES, payload: KeyStats) =>
    createAction({
      type,
      payload,
    }),
  setError: (type: KEY_STATS_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: KEY_STATS_ACTIONS_TYPES) => createAction({ type }),
  getData: (
    companySymbol: string,
    last?: string,
    parameters?: MapObject<string>
  ) =>
    createThunkAction(
      fetchKeyStats(companySymbol, last, parameters),
      keyStatsActions,
      KEY_STATS_ACTIONS_TYPES
    ),
};
