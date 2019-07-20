import { TD, TA } from '../util';

export const createThunkAction = <T extends string, P>(
  promise: Promise<P>,
  actions: any,
  types: DispatchTypes<T>,
  key?: string
): TA => async (dispatch: TD) => {
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

interface DispatchTypes<T> {
  resolve: T;
  reject: T;
  get: T;
}
