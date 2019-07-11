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
  getData: (companySymbol: string) => {
    const { setPayload, setError } = overviewActions;
    createThunkAction<OverviewAction, Overview, OverviewState>(
      fetchOverview(companySymbol),
      setPayload,
      setError
    );
  },
};
