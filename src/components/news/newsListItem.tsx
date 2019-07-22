import * as React from 'react';

import { Article } from '../../util';
import { getTimePublishedFormat } from './format-time-published';

export const NewsListItem: React.FunctionComponent<NewsItemProps> = ({
  news,
}: NewsItemProps) => {
  const { datetime, url, headline, source } = news;
  let timeAgo = getTimePublishedFormat(Date.now() - datetime);

  return (
    <li>
      <a href={url} target="_blank" className="section-news__list-link">
        {headline}
        <span className="section-news__list-timestamp">
          {timeAgo} - {source}
        </span>
      </a>
    </li>
  );
};

interface NewsItemProps {
  news: Article;
}
