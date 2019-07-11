import * as React from 'react';
import { NewsList } from '../news/newsList';
import { GraphContainer } from '../graph/graphContainer';

interface LatestNewsProps {
  newsList: any;
}

export const NewsGraphLayout: React.FunctionComponent<LatestNewsProps> = ({
  newsList,
}: LatestNewsProps) => {
  return (
    <div className="section-chart-news">
      {/* {<GraphContainer />} */}
      {newsList && <NewsList newsList={newsList} />}
    </div>
  );
};
