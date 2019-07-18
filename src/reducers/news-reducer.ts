import { NewsAction, NEWS_ACTIONS_TYPES } from '../actions';
import { newsDefaultState } from '../states';

export const newsReducer = (
  state = newsDefaultState,
  { type, payload, error }: NewsAction
) => {
  const { resolve, reject, get } = NEWS_ACTIONS_TYPES;
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
