import { NewsAction } from './news-actions';
import { OverviewAction } from './overview-actions';
import { KeyStatsAction } from './keystats-actions';
import { PeersAction } from './peers-actions';
import { QuoteAction } from './quote-actions';
import { TimeSeriesAction } from './time-series-actions';

export type ApplicationAction =
  | NewsAction
  | OverviewAction
  | KeyStatsAction
  | PeersAction
  | QuoteAction
  | TimeSeriesAction;
