import * as React from 'react';
import { HeaderContainer } from './header/headerContainer';
import { NewsGraphContainer } from './news-graph-layout/newsGraphContainer';
import { OverviewStatsContainer } from './overview-stats-layout/overviewStatsContainer';
import '../app-css/App.css';
import { connect } from 'react-redux';
import { ApplicationState } from '../states';
import { Loader } from '../util';

const App: React.SFC = ({ areNewsLoading, isOverviewLoading }: any) => {
  return (
    <>
      <HeaderContainer title="Stock Tracker App" />
      <div className="section-data">
        {areNewsLoading && <Loader />}
        {!areNewsLoading && <NewsGraphContainer />}
        {!areNewsLoading && <OverviewStatsContainer />}
      </div>
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  areNewsLoading: state.newsState.isLoading,
  isOverviewLoading: state.overviewState.isLoading,
});

export const EnhancedApp = connect(mapStateToProps)(App);
