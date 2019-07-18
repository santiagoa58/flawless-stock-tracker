import { News, FetchError } from '../util';

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
