import { PEERS_ACTIONS_TYPES } from './constants';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from './defaults';
import { Peers, fetchPeers } from '../util';

export const PeersActions = {
  setPeers: (type: PEERS_ACTIONS_TYPES.SET_TOP_PEERS, payload: Peers) =>
    createAction({ type, payload }),
  setError: (
    type: PEERS_ACTIONS_TYPES.SET_TOP_PEERS_ERROR,
    error: FetchError
  ) => createAction({ type, error }),
};

export const PeersThunkActions = {
  getPeers: (companySymbol: string) =>
    createThunkAction(
      fetchPeers(companySymbol),
      PeersActions.setPeers,
      PeersActions.setError
    ),
};

export type PeersAction = ActionType<Peers>;
