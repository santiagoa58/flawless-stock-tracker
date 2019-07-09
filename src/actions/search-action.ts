import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { getNews } from './news-actions';
import { getTimeSeries } from './time-series-actions';
import { getPeers } from './peers-actions';
import { getKeyStats } from './keystats-actions';
import { getOverview } from './overview-actions';
import { SEARCH, SET_SEARCH_ERROR } from './constants';

export interface SearchAction {
  type: typeof SEARCH | typeof SET_SEARCH_ERROR;
  payload: string;
}

export const setSearchError: ActionCreator<SearchAction> = (
  payload: string
): SearchAction => ({ type: SET_SEARCH_ERROR, payload });

export const search: ActionCreator<ThunkAction<void, {}, {}, SearchAction>> = (
  companySymbol: string
): ThunkAction<void, {}, {}, SearchAction> => (
  dispatch: ThunkDispatch<{}, {}, SearchAction>
) => {
  dispatch(getNews(companySymbol));
  dispatch(getPeers(companySymbol));
  dispatch(getKeyStats(companySymbol));
  dispatch(getOverview(companySymbol));
  dispatch(getTimeSeries(companySymbol));
};
