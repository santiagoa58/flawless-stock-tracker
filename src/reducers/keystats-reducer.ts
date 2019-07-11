import { Reducer } from 'redux';

import { KeyStatsAction, KEY_STATS_ACTIONS_TYPES } from '../actions';
import { KeyStatsState, keyStatsDefaultState } from '../states';

export const keyStatsReducer: Reducer<KeyStatsState, KeyStatsAction> = (
  state: KeyStatsState = keyStatsDefaultState,
  { type, payload, error }: KeyStatsAction
): KeyStatsState => {
  const {
    SET_KEY_STATS,
    SET_KEY_STATS_ERROR,
    GET_KEY_STATS,
  } = KEY_STATS_ACTIONS_TYPES;
  switch (type) {
    case SET_KEY_STATS:
      return { ...state, keyStats: payload, isLoading: false };
    case SET_KEY_STATS_ERROR:
      return { ...state, error: error, isLoading: false };
    case GET_KEY_STATS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
