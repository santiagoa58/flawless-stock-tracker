import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store';
import { EnhancedApp } from './components/App';

const store = configureStore();

render(
  <Provider store={store}>
    <EnhancedApp />
  </Provider>,
  document.getElementById('root')
);
