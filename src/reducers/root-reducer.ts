import { Reducer, combineReducers } from 'redux';

import { newsReducer } from './news-reducer';
import { overviewReducer } from './overview-reducer';
import { peersReducer } from './peers-reducer';
import { keyStatsReducer } from './keystats-reducer';
import { timeSeriesReducer } from './time-series-reducer';
import { quoteReducer } from './quote-reducer';
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
