import { Reducer } from 'redux';
import { NewsAction } from '../actions/news-actions';
import { News } from '../util/';
import {} from '../';
import { SET_NEWS, SET_NEWS_ERROR, GET_NEWS } from '../actions/constants';

export interface NewsState {
  news: News;
  error: string | undefined;
  isLoading: boolean;
}

export const defaultState: NewsState = {
  news: undefined,
  error: undefined,
  isLoading: false,
};

export const newsReducer: Reducer<NewsState, NewsAction> = (
  state: any = defaultState,
  { type, payload }: NewsAction
): NewsState => {
  switch (type) {
    case SET_NEWS:
      return { ...state, news: payload, isLoading: false };
    case SET_NEWS_ERROR:
      return { ...state, error: payload, isLoading: false };
    case GET_NEWS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
