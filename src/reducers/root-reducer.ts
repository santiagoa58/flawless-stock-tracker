import { combineReducers } from 'redux';
import { quoteReducer } from './quote-reducer';
import { newsReducer } from './news-reducer';
import { overviewReducer } from './overview-reducer';
import { peersReducer } from './peers-reducer';
import { keyStatsReducer } from './keystats-reducer';
import { timeSeriesReducer } from './time-series-reducer';

export const rootReducer = combineReducers<any>({
  latestNews: newsReducer,
  companyInfo: overviewReducer,
  companyPeers: peersReducer,
  companyStats: keyStatsReducer,
  chartData: timeSeriesReducer,
  companyQuote: quoteReducer,
});
