import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';

import { SET_TOP_PEERS, SET_TOP_PEERS_ERROR } from './constants';
import { ActionSet } from './defaults';
import { Peers, fetchPeers } from '../util';

export type PeersAction = ActionSet<Peers> | ActionSet<string>;

export const setPeers: ActionCreator<PeersAction> = (
  payload: Peers
): PeersAction => ({ type: SET_TOP_PEERS, payload });

export const setPeersError: ActionCreator<PeersAction> = (
  payload: string
): PeersAction => ({ type: SET_TOP_PEERS_ERROR, payload });

export const getPeers: ActionCreator<
  ThunkAction<Promise<void>, {}, {}, PeersAction>
> = (
  companySymbol: string
): ThunkAction<Promise<void>, {}, {}, PeersAction> => async (
  dispatch: ThunkDispatch<{}, {}, PeersAction>
) => {
  fetchPeers(companySymbol)
    .then(response => {
      dispatch(setPeers(response));
    })
    .catch(error => {
      dispatch(setPeersError(error));
    });
};
