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
import { ApplicationActions } from '../actions';

export const rootReducer: Reducer<
  ApplicationState,
  ApplicationActions
> = combineReducers({
  newsState: newsReducer,
  overviewState: overviewReducer,
  peersState: peersReducer,
  keyStatsState: keyStatsReducer,
  timeSeriesState: timeSeriesReducer,
  quoteState: quoteReducer,
});
