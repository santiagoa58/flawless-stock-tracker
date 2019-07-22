import * as React from 'react';

import { CompanyInfo } from '../overview/companyInfo';
import KeyStatsContainer from '../key-stats/keyStatsContainer';
import { TopPeers } from '../peers/topPeers';
import { Peers, Overview } from '../../util';

export const OverviewStatsLayout = ({
  overview,
  topPeers,
}: OverviewStatsProps) => {
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

interface OverviewStatsProps {
  topPeers: Peers | undefined;
  overview: Overview | undefined;
}
