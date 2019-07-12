import { connect } from 'react-redux';

import { Graph } from './graph';
import { ApplicationState } from '../../states';
import { getTimeSeries } from './time-series-selectors';

const mapStateToProps = ({ timeSeriesState }: ApplicationState) => {
  return {
    oneDay: getTimeSeries(timeSeriesState['1d']),
    oneMonth: getTimeSeries(timeSeriesState['1m']),
    fiveDay: getTimeSeries(timeSeriesState['5dm']),
    oneYear: getTimeSeries(timeSeriesState['1y']),
    fiveYear: getTimeSeries(timeSeriesState['5y']),
    max: getTimeSeries(timeSeriesState.max),
  };
};

export const GraphContainer = connect(mapStateToProps)(Graph);
