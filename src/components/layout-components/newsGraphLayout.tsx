import * as React from 'react';
import { NewsList } from '../news/newsList';
import { GraphContainer } from '../graph/graphContainer';
import { News } from '../../util';

interface LatestNewsProps {
  newsList: News | undefined;
}

export const NewsGraphLayout = ({ newsList }: LatestNewsProps) => {
  return (
    <div className="section-chart-news">
      <GraphContainer />
      {newsList && <NewsList newsList={newsList} />}
    </div>
  );
};
