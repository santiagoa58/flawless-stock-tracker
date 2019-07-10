import { OVERVIEW_ACTIONS_TYPES } from './constants';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from './defaults';
import { Overview, fetchOverview } from '../util';

export const OverviewActions = {
  setOverview: (type: OVERVIEW_ACTIONS_TYPES.SET_OVERVIEW, payload: Overview) =>
    createAction({ type, payload }),
  setError: (
    type: OVERVIEW_ACTIONS_TYPES.SET_OVERVIEW_ERROR,
    error: FetchError
  ) => createAction({ type, error }),
};

export const OverviewThunkActions = {
  getOverview: (companySymbol: string) =>
    createThunkAction(
      fetchOverview(companySymbol),
      OverviewActions.setOverview,
      OverviewActions.setError
    ),
};

export type OverviewAction = ActionType<Overview>;
