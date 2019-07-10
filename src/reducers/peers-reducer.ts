import { Reducer } from 'redux';

import { PeersAction } from '../actions/peers-actions';
import { PeersState, peersDefaultState } from '../states/peers-states';

export const peersReducer: Reducer<PeersState, PeersAction> = (
  state: PeersState = peersDefaultState,
  { type, payload, error }: PeersAction
): PeersState => {
  switch (type) {
    case 'SET_TOP_PEERS':
      return { ...state, topPeers: payload, isLoading: false };
    case 'SET_TOP_PEERS_ERROR':
      return { ...state, error: error, isLoading: false };
    case 'GET_TOP_PEERS':
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
