import { isPartOf } from './common-typeguard';

export const areNews = (news: any): boolean => {
  const newsProperties = ['news'];
  const firstArticle = news[0];
  return isArticle(firstArticle) && isPartOf(newsProperties, firstArticle);
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
