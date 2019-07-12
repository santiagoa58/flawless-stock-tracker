import { Dispatch } from 'react';

import { SEARCH_ACTIONS_TYPES } from './constants';
import {
  newsActions,
  peersActions,
  keyStatsActions,
  overviewActions,
  timeSeriesActions,
} from './';
import { TimeSeriesRange } from '../util';
import { ActionType } from '../action-creators';
import { quoteActions } from './quote-actions';

export type SearchAction = ActionType<SEARCH_ACTIONS_TYPES, any>;

export const search = (companySymbol: string) => (dispatch: Dispatch<any>) => {
  dispatch(newsActions.getData(companySymbol));
  dispatch(quoteActions.getData(companySymbol));
  dispatch(peersActions.getData(companySymbol));
  dispatch(keyStatsActions.getData(companySymbol));
  dispatch(overviewActions.getData(companySymbol));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange.max));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange['1d']));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange['5dm']));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange['1m']));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange['1y']));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange['5y']));
};
