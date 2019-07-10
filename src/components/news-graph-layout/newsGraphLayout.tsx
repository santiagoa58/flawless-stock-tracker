import * as React from 'react';
import { NewsList } from '../news/newsList';

interface LatestNewsProps {
  newsList: any;
}

export const NewsGraphLayout: React.FunctionComponent<LatestNewsProps> = ({
  newsList,
}: LatestNewsProps) => {
  return (
    <div className="section-chart-news">
      {newsList && <NewsList newsList={newsList} />}
    </div>
  );
};
