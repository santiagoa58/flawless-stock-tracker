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
  getData: (companySymbol: string, last?: number) => {
    const { setPayload, setError } = newsActions;
    return createThunkAction<NewsAction, News, NewsState>(
      fetchNews(companySymbol, last),
      setPayload,
      setError
    );
  },
};
