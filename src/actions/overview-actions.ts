import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';

import { OVERVIEW_ACTION_TYPES } from './constants';
import { ActionSet } from './defaults';
import { Overview, fetchOverview } from '../util';
import { OverviewState } from '../reducers/overview-reducer';

export type OverviewAction = ActionSet<OVERVIEW_ACTION_TYPES>;

export const setOverview: ActionCreator<OverviewAction> = (payload: Overview): OverviewAction => ({
  type: OVERVIEW_ACTION_TYPES.SET_OVERVIEW,
  payload,
});

export const setOverviewError: ActionCreator<OverviewAction> = (payload: string): OverviewAction => ({
  type: OVERVIEW_ACTION_TYPES.SET_OVERVIEW_ERROR,
  payload,
});

export const getOverview: ActionCreator<ThunkAction<Promise<void>, OverviewState, {}, OverviewAction>> = (
  companySymbol: string
): ThunkAction<Promise<void>, {}, {}, OverviewAction> => async (dispatch: ThunkDispatch<OverviewState, {}, OverviewAction>) => {
  fetchOverview(companySymbol)
    .then((response: Overview) => {
      // need better understanding of what response is
      dispatch(setOverview(response));
    })
    .catch((error: Error) => {
      dispatch(setOverviewError(error));
    });
};
