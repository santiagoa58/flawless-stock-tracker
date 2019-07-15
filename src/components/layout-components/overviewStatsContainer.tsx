import { connect } from 'react-redux';
import { ApplicationState } from '../../states';
import { getOverview, getPeers } from '../../selectors';
import { OverviewStatsLayout } from './overviewStatsLayout';

const mapStateToProps = (state: ApplicationState) => ({
  overview: getOverview(state),
  topPeers: getPeers(state),
});

export const OverviewStatsContainer = connect(mapStateToProps)(
  OverviewStatsLayout
);
