import * as React from 'react';
import { HeaderContainer } from './header/headerContainer';
import { NewsGraphContainer } from './layout-components/newsGraphContainer';
import { OverviewStatsContainer } from './layout-components/overviewStatsContainer';
import '../app-css/App.css';
import { connect } from 'react-redux';
import { ApplicationState } from '../states';
import { Loader } from '../util';

const App: React.SFC = ({ areNewsLoading, isOverviewLoading }: any) => {
  return (
    <>
      <HeaderContainer />
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
