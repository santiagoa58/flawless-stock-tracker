import { KEY_STATS_ACTIONS_TYPES } from './constants';
import { KeyStats, fetchKeyStats, MapObject } from '../util';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from '../action-creators';
import { KeyStatsState } from '../states';

export type KeyStatsAction = ActionType<KEY_STATS_ACTIONS_TYPES, KeyStats>;

export const keyStatsActions = {
  setPayload: (type: KEY_STATS_ACTIONS_TYPES, payload: KeyStats) =>
    createAction({
      type,
      payload,
    }),
  setError: (type: KEY_STATS_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: KEY_STATS_ACTIONS_TYPES) => ({ type }),
  getData: (
    companySymbol: string,
    last?: string,
    parameters?: MapObject<string>
  ) =>
    createThunkAction<KeyStatsAction, KeyStats, KeyStatsState>(
      fetchKeyStats(companySymbol, last, parameters),
      keyStatsActions,
      KEY_STATS_ACTIONS_TYPES
    ),
};
