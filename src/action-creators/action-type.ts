import { ThunkDispatch, ThunkAction } from 'redux-thunk';

import { ApplicationState } from '../states';
import { ApplicationActions } from '../actions';

export interface FetchError {
  code: number;
}

export interface FluxStandardAction<T, P, E> {
  readonly type: T;
  readonly payload?: P;
  readonly error?: E;
  readonly key?: string;
}

export type TD = ThunkDispatch<ApplicationState, {}, ApplicationActions>;

export type TA = ThunkAction<void, ApplicationState, {}, ApplicationActions>;
