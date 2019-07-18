import { connect } from 'react-redux';

import { ApplicationState } from '../../states';
import { OverviewStatsLayout } from './overviewStatsLayout';

const mapStateToProps = ({ overviewState, peersState }: ApplicationState) => ({
  overview: overviewState.payload,
  topPeers: peersState.payload,
});

export const OverviewStatsContainer = connect(mapStateToProps)(
  OverviewStatsLayout
);
