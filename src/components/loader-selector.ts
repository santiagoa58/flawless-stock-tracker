import { ApplicationState } from '../states';

export const getIsLoading = ({
  newsState,
  earningsState,
  overviewState,
  keyStatsState,
  quoteState,
  peersState,
  timeSeriesState,
}: ApplicationState) =>
  newsState.isLoading ||
  earningsState.isLoading ||
  overviewState.isLoading ||
  keyStatsState.isLoading ||
  peersState.isLoading ||
  timeSeriesState.isLoading;
