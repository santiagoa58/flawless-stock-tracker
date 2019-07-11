import { isPartOf } from './common-typeguard';

export const areNews = (testedObject: any): boolean => {
  const newsProperties = ['news'];
  const firstArticle = testedObject.news[0];
  return isArticle(firstArticle) && isPartOf(newsProperties, testedObject);
};

export const isArticle = (testedObject: any): boolean => {
  const articleProperties = [
    'datetime',
    'headline',
    'source',
    'url',
    'summary',
    'related',
    'image',
    'lang',
    'hasPaywall',
  ];
  return isPartOf(articleProperties, testedObject);
};
