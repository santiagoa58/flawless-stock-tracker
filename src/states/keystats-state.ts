import { KeyStats, FetchError } from '../util';

export interface KeyStatsState {
  payload: KeyStats | undefined;
  error: FetchError | undefined;
  isLoading?: boolean;
}

export const keyStatsDefaultState: KeyStatsState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
