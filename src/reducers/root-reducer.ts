import { Reducer, combineReducers } from 'redux';

import {
  newsReducer,
  overviewReducer,
  peersReducer,
  keyStatsReducer,
  timeSeriesReducer,
  quoteReducer,
} from './';
import { ApplicationState } from '../states';
import { ApplicationAction } from '../actions';

export const rootReducer: Reducer<
  ApplicationState,
  ApplicationAction
> = combineReducers({
  news: newsReducer,
  overview: overviewReducer,
  peers: peersReducer,
  keyStats: keyStatsReducer,
  timeSeries: timeSeriesReducer,
  quote: quoteReducer,
});
