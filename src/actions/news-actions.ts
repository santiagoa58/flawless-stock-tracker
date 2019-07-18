import { NEWS_ACTIONS_TYPES } from './constants';
import { News, fetchNews, FluxStandardAction, FetchError } from '../util';
import { createAction, createThunkAction } from '../action-creators';

export type NewsAction = FluxStandardAction<
  NEWS_ACTIONS_TYPES,
  News,
  FetchError
>;

export const newsActions = {
  setPayload: (type: NEWS_ACTIONS_TYPES, payload: News) =>
    createAction({ type, payload }),
  setError: (type: NEWS_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: NEWS_ACTIONS_TYPES) => createAction({ type }),
  getData: (companySymbol: string, last?: number) =>
    createThunkAction(
      fetchNews(companySymbol, last),
      newsActions,
      NEWS_ACTIONS_TYPES
    ),
};
