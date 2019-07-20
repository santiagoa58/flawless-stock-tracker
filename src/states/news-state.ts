import { News, FetchError } from '../util';

export interface NewsState {
  payload: News | undefined;
  error: FetchError | undefined;
  isLoading?: boolean;
}

export const newsDefaultState: NewsState = {
  payload: undefined,
  error: undefined,
  isLoading: false,
};
