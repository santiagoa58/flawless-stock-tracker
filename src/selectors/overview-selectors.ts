import { ApplicationState } from '../states';

export const getOverview = ({ overviewState }: ApplicationState) =>
  overviewState.overview;
