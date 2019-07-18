import { OVERVIEW_ACTIONS_TYPES } from './constants';
import { Overview, fetchOverview } from '../util';
import {
  createAction,
  createThunkAction,
  FetchError,
  FluxStandardAction,
} from '../action-creators';

export type OverviewAction = FluxStandardAction<
  OVERVIEW_ACTIONS_TYPES,
  Overview,
  FetchError
>;

export const overviewActions = {
  setPayload: (type: OVERVIEW_ACTIONS_TYPES, payload: Overview) =>
    createAction({
      type,
      payload,
    }),
  setError: (type: OVERVIEW_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: OVERVIEW_ACTIONS_TYPES) => createAction({ type }),
  getData: (companySymbol: string) =>
    createThunkAction(
      fetchOverview(companySymbol),
      overviewActions,
      OVERVIEW_ACTIONS_TYPES
    ),
};
