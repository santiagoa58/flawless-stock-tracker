import { AnyAction, Reducer } from 'redux';

export const newsReducer: Reducer<any, AnyAction> = (
  state: any = {},
  { type, payload }: AnyAction
) => {
  switch (type) {
    case 'SET_NEWS':
      return { ...state, news: payload };
    case 'SET_NEWS_ERROR':
      return { ...state, error: payload };
    default:
      return state;
  }
};
