import { connect } from 'react-redux';
import { OverviewStatsLayout } from './overviewStatsLayout';
import { Overview } from '../../util';

interface OverviewKeyStats {
  companyInfo: { overview: Overview };
  companyPeers: { topPeers: string[] };
}

const mapStateToProps = ({ companyInfo, companyPeers }: OverviewKeyStats) => ({
  overview: companyInfo.overview,
  topPeers: companyPeers.topPeers,
});

export const OverviewStatsContainer = connect(
  mapStateToProps,
  null
)(OverviewStatsLayout);
