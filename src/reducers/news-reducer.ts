import { Reducer } from 'redux';

import { NewsAction, NEWS_ACTIONS_TYPES } from '../actions';
import { NewsState, newsDefaultState } from '../states';

export const newsReducer: Reducer<NewsState, NewsAction> = (
  state: NewsState = newsDefaultState,
  { type, payload, error }: NewsAction
): NewsState => {
  const { SET_NEWS, SET_NEWS_ERROR, GET_NEWS } = NEWS_ACTIONS_TYPES;
  switch (type) {
    case SET_NEWS:
      return { ...state, news: payload, isLoading: false };
    case SET_NEWS_ERROR:
      return { ...state, error: error, isLoading: false };
    case GET_NEWS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
