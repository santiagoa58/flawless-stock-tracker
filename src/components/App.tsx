import * as React from 'react';
import { connect } from 'react-redux';

import { getNews } from '../actions/news-actions';

interface AppProps {
  title: string;
  news: any[];
  gNews: () => void;
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

const mapStateToProps = ({ newsReducer }: any) => ({
  news: newsReducer.news,
});

const mapDispatchToProps = (dispatch: any) => ({
  gNews: () => dispatch(getNews('aapl')),
});

export const DecoratedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
