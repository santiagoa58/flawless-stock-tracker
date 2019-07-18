import { FluxStandardAction } from './action-type';

export const createAction = <T, P, E>({
  type,
  payload,
  key,
  error,
}: {
  type: T;
  payload?: P;
  error?: E;
  key?: string;
}): FluxStandardAction<T, P, E> => ({ type, payload, error, key });
