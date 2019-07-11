import { connect } from 'react-redux';

import { NewsGraphLayout } from './newsGraphLayout';
import { ApplicationState } from '../../states';
import { getNews } from '../../selectors';

const mapStateToProps = (state: ApplicationState) => {
  return { newsList: getNews(state) };
};

export const NewsGraphContainer = connect(mapStateToProps)(NewsGraphLayout);
