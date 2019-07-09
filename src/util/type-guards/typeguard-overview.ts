import { isPartOf } from './common-typeguard';

export const isOverview = (testedObject: any): boolean => {
  const overviewProperties = [
    'symbol',
    'companyName',
    'exchange',
    'industry',
    'website',
    'description',
    'CEO',
    'securityName',
    'issueType',
    'setor',
    'employees',
    'tags',
  ];
  return isPartOf(overviewProperties, testedObject);
};
