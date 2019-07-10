import { Peers } from '../util';
import { FetchError } from '../actions/defaults';

export interface PeersState {
  topPeers: Peers;
  error: FetchError | undefined;
  isLoading: boolean;
}

export const peersDefaultState: PeersState = {
  topPeers: undefined,
  error: undefined,
  isLoading: false,
};
