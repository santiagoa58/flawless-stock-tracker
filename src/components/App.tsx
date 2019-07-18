import * as React from 'react';
import { HeaderContainer } from './header/headerContainer';
import { NewsGraphContainer } from './layout-components/newsGraphContainer';
import { OverviewStatsContainer } from './layout-components/overviewStatsContainer';
import { Footer } from './footer/footer';
import { connect } from 'react-redux';
import { ApplicationState } from '../states';
import { Loader } from '../util';

import '../css/App.css';
import '../css/media-queries.css';

const App: React.SFC = ({ areNewsLoading, isOverviewLoading }: any) => {
  return (
    <>
      <div className="main-content">
        <HeaderContainer />
        <div className="section-data">
          {areNewsLoading && <Loader />}
          {!areNewsLoading && <NewsGraphContainer />}
          {!areNewsLoading && <OverviewStatsContainer />}
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  areNewsLoading: state.newsState.isLoading,
  isOverviewLoading: state.overviewState.isLoading,
});

export const EnhancedApp = connect(mapStateToProps)(App);
