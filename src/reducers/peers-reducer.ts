import { PeersAction, PEERS_ACTIONS_TYPES } from '../actions';
import { peersDefaultState } from '../states';

export const peersReducer = (
  state = peersDefaultState,
  { type, payload, error }: PeersAction
) => {
  const { resolve, reject, get } = PEERS_ACTIONS_TYPES;
  switch (type) {
    case resolve:
      return { ...state, peers: payload, isLoading: false };
    case reject:
      return { ...state, error: error, isLoading: false };
    case get:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
