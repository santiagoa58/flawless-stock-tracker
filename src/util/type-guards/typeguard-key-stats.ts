import { isPartOf } from './common-typeguard';

export const isKeyStats = (testedObject: any): boolean => {
  const keyStatsProperties = [
    'companyName',
    'marketcap',
    'week52high',
    'week52low',
    'week52change',
    'peRatio',
    'dividendYield',
  ];
  return isPartOf(keyStatsProperties, testedObject);
};
