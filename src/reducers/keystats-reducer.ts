import { KeyStatsAction, KEY_STATS_ACTIONS_TYPES } from '../actions';
import { keyStatsDefaultState } from '../states';

export const keyStatsReducer = (
  state = keyStatsDefaultState,
  { type, payload, error }: KeyStatsAction
) => {
  const { resolve, reject, get } = KEY_STATS_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, payload, isLoading: false };
    case reject:
      return { ...state, error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
