import { Reducer } from 'redux';
import { NewsAction } from '../actions/news-actions';

export interface NewsState {
  news: any[];
  error: string | undefined;
  isLoading: boolean;
}

export const newsState: NewsState = {
  news: [],
  error: undefined,
  isLoading: false,
};

export type NewsReducer = Reducer<NewsState, NewsAction>;

export const newsReducer: NewsReducer = (state: NewsState = newsState, { type, payload }: NewsAction): NewsState => {
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
