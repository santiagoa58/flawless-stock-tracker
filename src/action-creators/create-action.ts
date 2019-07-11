import { FluxStandardAction } from './action-type';

export const createAction = <T extends string, P, E>({
  type,
  payload,
  error,
}: {
  type: T;
  payload?: P;
  error?: E;
}): FluxStandardAction<T, P, E> => ({ type, payload, error });
