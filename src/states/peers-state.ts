import { Peers } from '../util';
import { FetchError } from '../action-creators';

export interface PeersState {
  peers?: Peers;
  error?: FetchError;
  isLoading?: boolean;
}

export const peersDefaultState: PeersState = {
  peers: undefined,
  error: undefined,
  isLoading: false,
};
