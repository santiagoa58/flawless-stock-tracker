import { Peers, FetchError } from '../util';

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
