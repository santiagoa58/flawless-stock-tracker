import { combineReducers } from 'redux';

import { newsReducer } from './news-reducer';
import { overviewReducer } from './overview-reducer';
import { peersReducer } from './peers-reducer';
import { keyStatsReducer } from './keystats-reducer';
import { timeSeriesReducer } from './time-series-reducer';
import { quoteReducer } from './quote-reducer';
import { EarningsReducer } from './earnings-reducer';
import { favoritesReducer } from './favorites-reducer';

export const rootReducer = combineReducers({
  newsState: newsReducer,
  overviewState: overviewReducer,
  peersState: peersReducer,
  keyStatsState: keyStatsReducer,
  timeSeriesState: timeSeriesReducer,
  quoteState: quoteReducer,
  earningsState: EarningsReducer,
  favoritesState: favoritesReducer,
});
