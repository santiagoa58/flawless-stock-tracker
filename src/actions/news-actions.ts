import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';

import { NEWS_ACTION_TYPES } from './constants';
import { ActionSet } from './defaults';
import { News, fetchNews } from '../util';
import { NewsState } from '../reducers/news-reducer';

// You can abstract the creation of actions into a function
// create a map of the action
// see: ActionCreatorsMapObject
export type NewsAction = ActionSet<NEWS_ACTION_TYPES>;

export const setNews: ActionCreator<NewsAction> = (payload: News): NewsAction => ({
  type: NEWS_ACTION_TYPES.SET_NEWS,
  payload,
});

export const setNewsError: ActionCreator<NewsAction> = (payload: string): NewsAction => ({
  type: NEWS_ACTION_TYPES.SET_NEWS_ERROR,
  payload,
});

// abstract the creation of thunks into a function that can spit out future thunkActions
// be sure to set the first empty object in the ThunkAction type to the NewsState interface
export const getNews: ActionCreator<ThunkAction<Promise<void>, NewsState, {}, NewsAction>> = (
  companySymbol: string,
  last?: number
): ThunkAction<Promise<void>, {}, {}, NewsAction> => async (dispatch: ThunkDispatch<NewsState, {}, NewsAction>) => {
  fetchNews(companySymbol, last)
    .then(response => {
      dispatch(setNews(response));
    })
    .catch(error => {
      dispatch(setNewsError(error));
    });
};
