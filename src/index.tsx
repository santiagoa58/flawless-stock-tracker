import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store';
import { DecoratedApp } from './components/App';

const store = configureStore();

render(
  <Provider store={store}>
    <DecoratedApp title={'amazing page'} />
  </Provider>,
  document.getElementById('root')
);
