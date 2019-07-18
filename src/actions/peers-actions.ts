import { PEERS_ACTIONS_TYPES } from './constants';
import { Peers, fetchPeers, FluxStandardAction, FetchError } from '../util';
import { createAction, createThunkAction } from '../action-creators';

export type PeersAction = FluxStandardAction<
  PEERS_ACTIONS_TYPES,
  Peers,
  FetchError
>;

export const peersActions = {
  setPayload: (type: PEERS_ACTIONS_TYPES, payload: Peers) =>
    createAction({ type, payload }),
  setError: (type: PEERS_ACTIONS_TYPES, error: FetchError) =>
    createAction({ type, error }),
  setLoading: (type: PEERS_ACTIONS_TYPES) => createAction({ type }),
  getData: (companySymbol: string) =>
    createThunkAction(
      fetchPeers(companySymbol),
      peersActions,
      PEERS_ACTIONS_TYPES
    ),
};
