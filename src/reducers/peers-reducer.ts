import { Reducer } from 'redux';

import { PeersAction, PEERS_ACTIONS_TYPES } from '../actions';
import { PeersState, peersDefaultState } from '../states';

export const peersReducer: Reducer<PeersState, PeersAction> = (
  state: PeersState = peersDefaultState,
  { type, payload, error }: PeersAction
): PeersState => {
  const {
    SET_TOP_PEERS,
    SET_TOP_PEERS_ERROR,
    GET_TOP_PEERS,
  } = PEERS_ACTIONS_TYPES;
  switch (type) {
    case SET_TOP_PEERS:
      return { ...state, peers: payload, isLoading: false };
    case SET_TOP_PEERS_ERROR:
      return { ...state, error: error, isLoading: false };
    case GET_TOP_PEERS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
