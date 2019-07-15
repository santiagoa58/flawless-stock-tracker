import { Action, ActionCreator } from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';

import { FetchError } from './action-type';

export const createThunkAction = <A extends Action, T extends any, S>(
  promise: Promise<T>,
  actions: ThunkCreatorActions,
  types: DispatchTypes,
  key?: string
): ThunkAction<void, S, {}, A> => async (dispatch: ThunkDispatch<S, {}, A>) => {
  const { resolve, reject, get } = types;
  const { setPayload, setError, setLoading } = actions;
  dispatch(setLoading(get));
  try {
    const response = await promise;
    key
      ? dispatch(setPayload(resolve, response, key))
      : dispatch(setPayload(resolve, response));
  } catch (error) {
    dispatch(setError(reject, error));
  }
};

interface DispatchTypes {
  resolve: string;
  reject: string;
  get: string;
}

interface ThunkCreatorActions {
  setPayload: any;
  setError: any;
  setLoading: any;
}
