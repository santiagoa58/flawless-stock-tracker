import { Action, ActionCreator } from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';

import { FetchError } from './action-type';

export const createThunkAction = <A extends Action, T extends any, S>(
  fn: Promise<T>,
  actions: ThunkCreatorActions,
  types: DispatchTypes,
  key?: string
): ThunkAction<void, S, {}, A> => async (
  dispatch: ThunkDispatch<S, {}, A>
): Promise<void> => {
  const { resolve, reject, get } = types;
  const { setPayload, setError, setLoading } = actions;
  dispatch(setLoading(get));
  fn.then((response: T) => {
    key
      ? dispatch(setPayload(resolve, response, key))
      : dispatch(setPayload(resolve, response));
  }).catch((error: FetchError) => {
    dispatch(setError(reject, error));
  });
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
