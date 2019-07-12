import { FluxStandardAction } from './action-type';

export const createAction = <T extends string, P, E>({
  type,
  payload,
  error,
  key,
}: {
  type: T;
  payload?: P;
  error?: E;
  key?: string;
}): FluxStandardAction<T, P, E> => ({ type, payload, error, key });
