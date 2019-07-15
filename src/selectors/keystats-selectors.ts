import { ApplicationState } from '../states';

export const getKeyStats = ({ keyStatsState }: ApplicationState) =>
  keyStatsState.keyStats;
