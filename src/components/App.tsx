import * as React from 'react';
import { HeaderContainer } from './header/headerContainer';
import { NewsGraphContainer } from './news-graph-layout/newsGraphContainer';
import { OverviewStatsContainer } from './overview-stats-layout/overviewStatsContainer';

export const App: React.SFC = () => {
  return (
    <>
      <HeaderContainer title="Stock Tracker App" />
      <NewsGraphContainer />
      <OverviewStatsContainer />
    </>
  );
};
