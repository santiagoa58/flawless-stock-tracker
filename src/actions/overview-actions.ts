import { OVERVIEW_ACTIONS_TYPES } from './constants';
import { Overview, fetchOverview } from '../util';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from '../action-creators';
import { OverviewState } from '../states';

export type OverviewAction = ActionType<OVERVIEW_ACTIONS_TYPES, Overview>;

export const overviewActions = {
  setPayload: (type: OVERVIEW_ACTIONS_TYPES, payload: Overview) =>
    createAction({
      type,
      payload,
    }),
  setError: (type: OVERVIEW_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: OVERVIEW_ACTIONS_TYPES) => ({ type }),
  getData: (companySymbol: string) =>
    createThunkAction<OverviewAction, Overview, OverviewState>(
      fetchOverview(companySymbol),
      overviewActions,
      OVERVIEW_ACTIONS_TYPES
    ),
};
