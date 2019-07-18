import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers';
import { TD } from '../util';

export const configureStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk as Middleware<TD>))
  );
