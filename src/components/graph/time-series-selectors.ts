import { TimeSeries } from '../../util';

export const getTimeSeries = (timeSeries: TimeSeries) => {
  const chartData = timeSeries.filter(timePoint => {
    return timePoint.close != null;
  });
  return chartData;
};
