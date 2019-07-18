import { KeyStats, FetchError } from '../util';

export interface KeyStatsState {
  payload: KeyStats;
  error: FetchError;
  isLoading?: boolean;
}

export const keyStatsDefaultState: KeyStatsState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
