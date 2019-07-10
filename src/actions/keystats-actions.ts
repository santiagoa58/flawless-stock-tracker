import { KEY_STATS_ACTIONS_TYPES } from './constants';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from './defaults';
import { KeyStats, fetchKeyStats } from '../util';
import { MapObject } from '../util/services/types';
import { KeyStatsState } from '../reducers/keystats-reducer';

export type KeyStatsAction = ActionType<KeyStats>;

export const KeyStatsActions = {
  setPayload: (
    type: KEY_STATS_ACTIONS_TYPES.SET_KEY_STATS,
    payload: KeyStats
  ) => createAction({ type, payload }),
  setError: (
    type: KEY_STATS_ACTIONS_TYPES.SET_KEY_STATS_ERROR,
    error: FetchError
  ) => createAction({ type, error }),
  getData: (
    companySymbol: string,
    last?: string,
    parameters?: MapObject<string>
  ) => {
    const { setPayload, setError } = KeyStatsActions;
    createThunkAction<KeyStatsAction, KeyStats, KeyStatsState>(
      fetchKeyStats(companySymbol, last, parameters),
      setPayload,
      setError
    );
  },
};
