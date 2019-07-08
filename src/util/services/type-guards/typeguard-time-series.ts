import { isPartOf } from './common-typeguard';

export const areTimeSeries = (testedObject: any): boolean => {
  const timeSeriesProperties = ['timeSeries'];
  const firstPoint = testedObject.timeSeries[0];
  return (
    isTimePoint(firstPoint) && isPartOf(timeSeriesProperties, testedObject)
  );
};

const isTimePoint = (testedObject: any): boolean => {
  const timePointProperties = [
    'date',
    'open',
    'high',
    'low',
    'close',
    'volume',
    'unadjustedVolume',
    'change',
    'changePercent',
    'vwap',
    'label',
    'changeOverTime',
  ];
  return isPartOf(timePointProperties, testedObject);
};
