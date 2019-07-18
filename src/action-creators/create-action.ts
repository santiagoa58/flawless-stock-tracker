import { FluxStandardAction, FetchError } from '../util';

export const createAction = <T, P>({
  type,
  payload,
  key,
  error,
}: {
  type: T;
  payload?: P;
  error?: FetchError;
  key?: string;
}): FluxStandardAction<T, P, FetchError> => ({
  type,
  payload,
  error,
  key,
});
