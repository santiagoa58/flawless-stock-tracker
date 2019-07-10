import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const createAction = <T extends string, P, E>({
  type,
  payload,
  error,
}: {
  type: T;
  payload?: P;
  error?: E;
}): FluxStandardAction<T, P, E> => ({ type, payload, error });

export const createThunkAction = <A extends Action, T extends any, S>(
  fn: Promise<T>,
  resolve: any,
  reject: any
): ThunkAction<Promise<void>, S, {}, A> => async (
  dispatch: ThunkDispatch<S, {}, A>
) => {
  fn.then(response => {
    if (response.ok) {
      dispatch(resolve(response));
    } else {
      throw new Error(response.status);
    }
  }).catch((error: FetchError) => {
    dispatch(reject(error));
  });
};

export type ActionType<P> = FluxStandardAction<string, P, FetchError>;

export interface FetchError {
  code: number;
}

interface FluxStandardAction<T, P, E> {
  readonly type: T;
  readonly payload?: P;
  readonly error?: E;
}
