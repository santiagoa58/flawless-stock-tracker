import { connect } from 'react-redux';
import { Graph } from './graph';
import { dataSelector } from './dataSelector';
import { TimePoint } from '../../util';

interface Graph {
  chartData: {
    '1m': TimePoint[];
    '1y': TimePoint[];
    '1d': TimePoint[];
    '5d': TimePoint[];
    '5y': TimePoint[];
    ['max']: TimePoint[];
  };
}

const mapStateToProps = ({ chartData }: Graph) => {
  return {
    isHourly: false,
    data: chartData['1m'],
  };
};

export const GraphContainer = connect(
  mapStateToProps,
  null
)(Graph);
