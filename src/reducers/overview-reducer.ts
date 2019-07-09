import { AnyAction, Reducer } from 'redux';

export const overviewReducer: Reducer<any, AnyAction> = (
  state: any = {},
  { type, payload }: AnyAction
) => {
  switch (type) {
    case 'SET_OVERVIEW':
      return { ...state, overview: payload };
    case 'SET_OVERVIEW_ERROR':
      return { ...state, error: payload };
    default:
      return state;
  }
};
