import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers';
import { ApplicationActions } from '../actions';
import { ApplicationState } from '../states';

export const configureStore = (): Store<ApplicationState, ApplicationActions> =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
