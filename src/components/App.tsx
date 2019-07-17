import * as React from 'react';
import { connect } from 'react-redux';

import { HeaderContainer } from './header/headerContainer';
import { NewsGraphContainer } from './layout-components/newsGraphContainer';
import { OverviewStatsContainer } from './layout-components/overviewStatsContainer';
import { Footer } from './footer/footer';
import '../app-css/App.css';
import { ApplicationState } from '../states';
import { Loader } from '../util';

const App = ({ areNewsLoading, isOverviewLoading }: AppProps) => (
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

const mapStateToProps = (state: ApplicationState) => ({
  areNewsLoading: state.newsState.isLoading,
  isOverviewLoading: state.overviewState.isLoading,
});

interface AppProps {
  areNewsLoading: boolean;
  isOverviewLoading: boolean;
}

export const EnhancedApp = connect(mapStateToProps)(App);
