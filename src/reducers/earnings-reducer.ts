import { Reducer } from 'redux';

import { EarningsAction, EARNINGS_ACTIONS_TYPES } from '../actions';
import { EarningsState, EarningsDefaultState } from '../states';

export const EarningsReducer: Reducer<EarningsState, EarningsAction> = (
  state: EarningsState = EarningsDefaultState,
  { type, payload, error }: EarningsAction
): EarningsState => {
  const { resolve, reject, get } = EARNINGS_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, earnings: payload, isLoading: false };
    case reject:
      return { ...state, error: error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
