import * as React from 'react';
import { connect } from 'react-redux';
import { CompanyInfo } from '../overview/companyInfo';
// import KeyStatsContainer from './keyStatsContainer';
// import TopPeers from './topPeers';
import { Overview } from '../../util/';

interface OverviewStatsProps {
  topPeers: string[];
  overview: Overview;
}

export const OverviewStatsLayout: React.FunctionComponent<
  OverviewStatsProps
> = ({ overview, topPeers }: OverviewStatsProps) => {
  return (
    <div className="company-wrapper">
      {
        /* <KeyStatsContainer />*/
        <div className="company-wrapper__info">
          {overview && <CompanyInfo companyInfo={overview} />}
          {/* <TopPeers topPeers={topPeers}/> */}
        </div>
      }
    </div>
  );
};
