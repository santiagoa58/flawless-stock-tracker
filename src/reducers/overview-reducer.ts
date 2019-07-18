import { OverviewAction, OVERVIEW_ACTIONS_TYPES } from '../actions';
import { overviewDefaultState } from '../states';

export const overviewReducer = (
  state = overviewDefaultState,
  { type, payload, error }: OverviewAction
) => {
  const { resolve, reject, get } = OVERVIEW_ACTIONS_TYPES;
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
