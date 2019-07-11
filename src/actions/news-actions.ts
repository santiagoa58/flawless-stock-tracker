import { NEWS_ACTIONS_TYPES } from './constants';
import { News, fetchNews } from '../util';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from '../action-creators';
import { NewsState } from '../states';

export type NewsAction = ActionType<NEWS_ACTIONS_TYPES, News>;

export const newsActions = {
  setPayload: (type: NEWS_ACTIONS_TYPES, payload: News) =>
    createAction({ type, payload }),
  setError: (type: NEWS_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: NEWS_ACTIONS_TYPES) => createAction({ type }),
  getData: (companySymbol: string, last?: number) =>
    createThunkAction<NewsAction, News, NewsState>(
      fetchNews(companySymbol, last),
      newsActions,
      NEWS_ACTIONS_TYPES
    ),
};
