import { SEARCH_ACTIONS_TYPES } from './constants';
import {
  newsActions,
  peersActions,
  keyStatsActions,
  overviewActions,
  timeSeriesActions,
  earningsActions,
} from './';
import { quoteActions } from './quote-actions';
import { TimeSeriesRange, FluxStandardAction, FetchError, TD } from '../util';

export type SearchAction = FluxStandardAction<
  SEARCH_ACTIONS_TYPES,
  void,
  FetchError
>;

export const search = (companySymbol: string) => (dispatch: TD) => {
  dispatch(quoteActions.getData(companySymbol));
  dispatch(newsActions.getData(companySymbol));
  dispatch(peersActions.getData(companySymbol));
  dispatch(keyStatsActions.getData(companySymbol));
  dispatch(overviewActions.getData(companySymbol));
  dispatch(earningsActions.getData(companySymbol));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange.max));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange['1d']));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange['5d']));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange['1m']));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange['1y']));
  dispatch(timeSeriesActions.getData(companySymbol, TimeSeriesRange['5y']));
};
