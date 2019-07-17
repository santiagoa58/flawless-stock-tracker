import { isPartOf } from './common-typeguard';

export const areTimeSeries = (timeSeries: any): boolean => {
  const timeSeriesProperties = ['timeSeries'];
  const firstPoint = timeSeries[0];
  return isTimePoint(firstPoint) && isPartOf(timeSeriesProperties, firstPoint);
};

const isTimePoint = (testedObject: any): boolean => {
  const timePointProperties = ['date', 'close', 'label', 'minute'];
  return isPartOf(timePointProperties, testedObject);
};
