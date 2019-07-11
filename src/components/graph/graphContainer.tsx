import { connect } from 'react-redux';

import { Graph } from './graph';
import { ApplicationState } from '../../states';
import { getTimeSeries } from '../../selectors';

const mapStateToProps = (state: ApplicationState) => ({
  data: getTimeSeries(state),
  isHourly: false,
});

export const GraphContainer = connect(mapStateToProps)(Graph);
