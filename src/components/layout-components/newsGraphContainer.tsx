import { connect } from 'react-redux';

import { NewsGraphLayout } from './newsGraphLayout';
import { ApplicationState } from '../../states';

const mapStateToProps = ({ newsState }: ApplicationState) => ({
  newsList: newsState.payload,
});

export const NewsGraphContainer = connect(mapStateToProps)(NewsGraphLayout);
