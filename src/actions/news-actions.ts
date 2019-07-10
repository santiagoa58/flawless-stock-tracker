import { NEWS_ACTIONS_TYPES } from './constants';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from './defaults';
import { News, fetchNews } from '../util';

export const NewsActions = {
  setNews: (type: NEWS_ACTIONS_TYPES.SET_NEWS, payload: News) =>
    createAction({ type, payload }),
  setNewsError: (type: NEWS_ACTIONS_TYPES.SET_NEWS_ERROR, error: FetchError) =>
    createAction({ type, error }),
};

export const getNews = (companySymbol: string, last?: number) => {
  const { setNews, setNewsError } = NewsActions;
  createThunkAction(fetchNews(companySymbol, last), setNews, setNewsError);
};

export type NewsAction = ActionType<News>;
