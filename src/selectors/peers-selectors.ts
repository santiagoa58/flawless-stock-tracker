import { ApplicationState } from '../states';

export const getPeers = ({ peersState }: ApplicationState) => peersState.peers;
