import { Reducer } from 'redux';

import { KeyStatsAction, KEY_STATS_ACTIONS_TYPES } from '../actions';
import { KeyStatsState, keyStatsDefaultState } from '../states';

export const keyStatsReducer: Reducer<KeyStatsState, KeyStatsAction> = (
  state: KeyStatsState = keyStatsDefaultState,
  { type, payload, error }: KeyStatsAction
): KeyStatsState => {
  const { resolve, reject, get } = KEY_STATS_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, keyStats: payload, isLoading: false };
    case reject:
      return { ...state, error: error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
