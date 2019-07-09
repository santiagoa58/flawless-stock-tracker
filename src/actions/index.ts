import { Action } from 'redux';
import { NewsAction } from './news-actions';
import { OverviewAction } from './overview-actions';

export { setNews, getNews } from './news-actions';
export { setOverview, getOverview } from './overview-actions';

export type ApplicationActions = NewsAction | OverviewAction;
