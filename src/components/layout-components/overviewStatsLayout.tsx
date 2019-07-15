import * as React from 'react';
import { CompanyInfo } from '../overview/companyInfo';
import KeyStatsContainer from '../key-stats/keyStatsContainer';
import { TopPeers } from '../peers/topPeers';

interface OverviewStatsProps {
  topPeers: any;
  overview: any;
}

export const OverviewStatsLayout: React.FunctionComponent<
  OverviewStatsProps
> = ({ overview, topPeers }: OverviewStatsProps) => {
  return (
    <div className="company-wrapper">
      <KeyStatsContainer />
      <div className="company-wrapper__info">
        {overview && <CompanyInfo companyInfo={overview} />}
        {topPeers && <TopPeers topPeers={topPeers} />}
      </div>
    </div>
  );
};
