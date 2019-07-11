import { ApplicationState } from '../states';

export const getTimeSeries = ({ timeSeriesState }: ApplicationState) =>
  timeSeriesState.timeSeries;
