import { connect } from 'react-redux';

import { MemoGraph } from './graph';
import { getTimeSeries } from './time-series-selectors';
import { ApplicationState } from '../../states';

const mapStateToProps = ({ timeSeriesState }: ApplicationState) => ({
  oneDay: getTimeSeries(timeSeriesState['1d']),
  fiveDay: getTimeSeries(timeSeriesState['5d']),
  oneMonth: getTimeSeries(timeSeriesState['1m']),
  oneYear: getTimeSeries(timeSeriesState['1y']),
  fiveYear: getTimeSeries(timeSeriesState['5y']),
  max: getTimeSeries(timeSeriesState.max),
});

export const GraphContainer = connect(mapStateToProps)(MemoGraph);
