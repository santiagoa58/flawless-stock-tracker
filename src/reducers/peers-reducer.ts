import { Reducer } from 'redux';
import { PeersAction } from '../actions/peers-actions';
import { Peers } from '../util/';
import {
  SET_TOP_PEERS,
  SET_TOP_PEERS_ERROR,
  GET_TOP_PEERS,
} from '../actions/constants';

export interface PeersState {
  topPeers: Peers;
  error: string | undefined;
  isLoading: boolean;
}

export const defaultState: PeersState = {
  topPeers: undefined,
  error: undefined,
  isLoading: false,
};

export const peersReducer: Reducer<PeersState, PeersAction> = (
  state: any = defaultState,
  { type, payload }: PeersAction
): PeersState => {
  switch (type) {
    case SET_TOP_PEERS:
      return { ...state, topPeers: payload, isLoading: false };
    case SET_TOP_PEERS_ERROR:
      return { ...state, error: payload, isLoading: false };
    case GET_TOP_PEERS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
