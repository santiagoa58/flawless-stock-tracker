import { EarningsAction, EARNINGS_ACTIONS_TYPES } from '../actions';
import { EarningsDefaultState } from '../states';

export const EarningsReducer = (
  state = EarningsDefaultState,
  { type, payload, error }: EarningsAction
) => {
  const { resolve, reject, get } = EARNINGS_ACTIONS_TYPES;
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
