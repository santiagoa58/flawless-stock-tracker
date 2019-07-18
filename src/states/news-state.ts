import { News } from '../util';
import { FetchError } from '../action-creators';

export interface NewsState {
  payload: News;
  error: FetchError;
  isLoading?: boolean;
}

export const newsDefaultState: NewsState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
