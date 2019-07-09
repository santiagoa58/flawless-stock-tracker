import { Reducer } from 'redux';
import { NewsAction } from '../actions/news-actions';

export interface NewsState {
  news: any | undefined;
  error: string | undefined;
  isLoading: boolean;
}

export const newsState: NewsState = {
  news: {},
  error: undefined,
  isLoading: false,
};

export const newsReducer: Reducer<NewsState, NewsAction> = (
  state: any = newsState,
  { type, payload }: NewsAction
): NewsState => {
  switch (type) {
    case 'SET_NEWS':
      return { ...state, news: payload, isLoading: false };
    case 'SET_NEWS_ERROR':
      return { ...state, error: payload, isLoading: false };
    case 'GET_NEWS':
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
