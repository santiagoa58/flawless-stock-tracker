import { Peers } from '../util';
import { FetchError } from '../action-creators';

export interface PeersState {
  payload: Peers;
  error: FetchError;
  isLoading?: boolean;
}

export const peersDefaultState: PeersState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
