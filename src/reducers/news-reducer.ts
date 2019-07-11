import { Reducer } from 'redux';

import { NewsAction, NEWS_ACTIONS_TYPES } from '../actions';
import { NewsState, newsDefaultState } from '../states';

export const newsReducer: Reducer<NewsState, NewsAction> = (
  state: NewsState = newsDefaultState,
  { type, payload, error }: NewsAction
): NewsState => {
  const { resolve, reject, get } = NEWS_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, news: payload, isLoading: false };
    case reject:
      return { ...state, error: error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
