import * as React from 'react';
import { connect } from 'react-redux';

import { getNews, NewsAction } from '../actions/news-actions';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState } from '../reducers/news-reducer';
import { OverviewState } from '../reducers/overview-reducer';

interface AppProps {
  title: string;
  news: any[];
  gNews: () => void;
}

interface RootReducer {
  newsReducer: NewsState;
  overviewReducer: OverviewState;
}

const App = ({ title, news, gNews }: AppProps) => {
  return (
    <>
      <h1>{title}</h1>
      <button onClick={gNews}>click me to see great news</button>
      {news && <p>{news[0].headline}</p>}
    </>
  );
};

const mapStateToProps = ({ newsReducer }: RootReducer) => ({
  news: newsReducer.news,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, NewsAction>) => ({
  gNews: () => dispatch(getNews('aapl')),
});

export const DecoratedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
