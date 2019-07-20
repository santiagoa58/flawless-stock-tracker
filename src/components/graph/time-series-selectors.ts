import { TimeSeries } from '../../util';

export const getTimeSeries = (timeSeries: TimeSeries | undefined) => {
  const chartData = timeSeries
    ? timeSeries.filter(timePoint => {
        return timePoint.close != null;
      })
    : undefined;
  return chartData;
};
