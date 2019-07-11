import * as React from 'react';
import { Article } from '../../util';
import { getTimePublishedFormat } from './getTimePublishedFormat';

interface NewsItemProps {
  news: Article;
}

export const NewsListItem: React.FunctionComponent<NewsItemProps> = ({
  news,
}: NewsItemProps) => {
  const { datetime, url, headline, source } = news;
  let timeAgo = getTimePublishedFormat(Date.now() - datetime);

  return (
    <li>
      <a href={url} className="section-news__list-link">
        {headline}
        <span className="section-news__list-timestamp">
          {timeAgo} - {source}
        </span>
      </a>
    </li>
  );
};
