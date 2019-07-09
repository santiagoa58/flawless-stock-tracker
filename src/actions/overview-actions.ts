import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';

import { SET_OVERVIEW, SET_OVERVIEW_ERROR } from './constants';
import { ActionSet } from './defaults';
import { Overview, fetchOverview } from '../util';

export type OverviewAction = ActionSet<Overview> | ActionSet<string>;

export const setOverview: ActionCreator<OverviewAction> = (
  payload: Overview
): OverviewAction => ({ type: SET_OVERVIEW, payload });

export const setOverviewError: ActionCreator<OverviewAction> = (
  payload: string
): OverviewAction => ({ type: SET_OVERVIEW_ERROR, payload });

export const getOverview = (
  companySymbol: string
): ThunkAction<Promise<void>, {}, {}, OverviewAction> => async (
  dispatch: ThunkDispatch<{}, {}, OverviewAction>
) => {
  try {
    fetchOverview(companySymbol).then(response => {
      dispatch(setOverview(response));
    });
  } catch (error) {
    dispatch(setOverviewError(error));
  }
};
