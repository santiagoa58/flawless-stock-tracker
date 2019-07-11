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

export type SearchAction = ActionType<SEARCH_ACTIONS_TYPES, any>;

export const search = (companySymbol: string) => (dispatch: any) => {
  dispatch(newsActions.getData(companySymbol));
  dispatch(peersActions.getData(companySymbol));
  dispatch(keyStatsActions.getData(companySymbol));
  dispatch(overviewActions.getData(companySymbol));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange.max));
};
