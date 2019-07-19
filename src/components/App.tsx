import * as React from 'react';
import { connect } from 'react-redux';

import { HeaderContainer } from './header/headerContainer';
import { NewsGraphContainer } from './layout-components/newsGraphContainer';
import { OverviewStatsContainer } from './layout-components/overviewStatsContainer';
import { Footer } from './footer/footer';
import { ApplicationState } from '../states';
import { Loader } from '../util';
import { getIsLoading } from './loader-selector';
import '../css/App.css';
import '../css/media-queries.css';

const App = ({ isLoading }: AppProps) => {
  return (
    <>
      <div className="main-content">
        <HeaderContainer />
        <div className="section-data">
          {isLoading && <Loader />}
          {!isLoading && <NewsGraphContainer />}
          {!isLoading && <OverviewStatsContainer />}
        </div>
      </div>
      <Footer />
    </>
  );
};
const mapStateToProps = (state: ApplicationState) => ({
  isLoading: getIsLoading(state),
});

export const EnhancedApp = connect(mapStateToProps)(App);

interface AppProps {
  isLoading: boolean;
}
