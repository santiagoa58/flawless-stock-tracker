import { isPartOf } from './common-typeguard';

export const isTimeSeries = (testedObject: any): boolean => {
  const timeSeriesProperties = ['timeSeries'];
  const firstPoint = testedObject[0];
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
