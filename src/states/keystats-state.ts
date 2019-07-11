import { KeyStats, FetchError } from '../util';

export interface KeyStatsState {
  keyStats?: KeyStats;
  error?: FetchError;
  isLoading?: boolean;
}

export const keyStatsDefaultState: KeyStatsState = {
  keyStats: undefined,
  error: undefined,
  isLoading: false,
};
