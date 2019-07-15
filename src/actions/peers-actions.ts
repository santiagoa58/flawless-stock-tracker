import { PEERS_ACTIONS_TYPES } from './constants';
import { Peers, fetchPeers } from '../util';
import {
  createAction,
  createThunkAction,
  ActionType,
  FetchError,
} from '../action-creators';
import { PeersState } from '../states';

export type PeersAction = ActionType<PEERS_ACTIONS_TYPES, Peers>;

export const peersActions = {
  setPayload: (type: PEERS_ACTIONS_TYPES, payload: Peers) =>
    createAction({ type, payload }),
  setError: (type: PEERS_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: PEERS_ACTIONS_TYPES) => ({ type }),
  getData: (companySymbol: string) =>
    createThunkAction<PeersAction, Peers, PeersState>(
      fetchPeers(companySymbol),
      peersActions,
      PEERS_ACTIONS_TYPES
    ),
};
