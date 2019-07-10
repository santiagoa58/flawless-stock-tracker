import { NewsState } from '../../reducers/news-reducer';
import { connect } from 'react-redux';
import { NewsGraphLayout } from './newsGraphLayout';

interface LatestNews {
  latestNews: NewsState;
}

const mapStateToProps = ({ latestNews }: LatestNews) => {
  return { newsList: latestNews.news };
};

export const NewsGraphContainer = connect(
  mapStateToProps,
  null
)(NewsGraphLayout);
