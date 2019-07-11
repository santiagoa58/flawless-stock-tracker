export type ActionType<T, P> = FluxStandardAction<T, P, FetchError>;

export interface FetchError {
  code: number;
}

export interface FluxStandardAction<T, P, E> {
  readonly type: T;
  readonly payload?: P;
  readonly error?: E;
}
