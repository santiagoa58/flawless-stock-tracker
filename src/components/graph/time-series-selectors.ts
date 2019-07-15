import { TimeSeries } from '../../util';

export const getTimeSeries = (timeSeries: TimeSeries) => {
  let chartData = timeSeries.filter(function removeNullValues(timePoint) {
    return timePoint.close != null;
  });
  return chartData;
};
