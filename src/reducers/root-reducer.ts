import { combineReducers } from 'redux';

import { newsReducer, NewsState } from './news-reducer';
import { overviewReducer, OverviewState } from './overview-reducer';
import { Reducer } from 'react';
import { ApplicationActions } from '../actions';

export interface ApplicationState {
  news: NewsState;
  overview: OverviewState;
}

export const rootReducer: Reducer<ApplicationState, ApplicationActions> = combineReducers({
  news: newsReducer,
  overview: overviewReducer,
});
