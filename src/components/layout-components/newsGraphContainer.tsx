import { connect } from 'react-redux';

import { NewsGraphLayout } from './newsGraphLayout';
import { ApplicationState } from '../../states';

const mapStateToProps = ({ newsState }: ApplicationState) => {
  return { newsList: newsState.payload };
};

export const NewsGraphContainer = connect(mapStateToProps)(NewsGraphLayout);
