import { combineReducers } from 'redux';

import { newsReducer } from './news-reducer';
import { overviewReducer } from './overview-reducer';

export const rootReducer = combineReducers<any>({
  newsReducer,
  overviewReducer,
});
