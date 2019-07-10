import { connect } from 'react-redux';
import { OverviewStatsLayout } from './overviewStatsLayout';
// import { OverviewState } from '../../reducers/overview-reducer';
// import { PeersState } from '../../reducers/peers-reducer';

interface OverviewKeyStats {
  // companyInfo: OverviewState;
  // companyPeers: PeersState;
  companyInfo: any;
  companyPeers: any;
}

const mapStateToProps = ({ companyInfo, companyPeers }: OverviewKeyStats) => ({
  overview: companyInfo.overview,
  topPeers: companyPeers.topPeers,
});

export const OverviewStatsContainer = connect(
  mapStateToProps,
  null
)(OverviewStatsLayout);
