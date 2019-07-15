import { NewsAction } from './news-actions';
import { OverviewAction } from './overview-actions';
import { KeyStatsAction } from './keystats-actions';
import { PeersAction } from './peers-actions';
import { QuoteAction } from './quote-actions';
import { TimeSeriesAction } from './time-series-actions';
import { SearchAction } from './search-action';
import { EarningsAction } from './earnings-actions';

export { NewsAction, newsActions } from './news-actions';
export { OverviewAction, overviewActions } from './overview-actions';
export { KeyStatsAction, keyStatsActions } from './keystats-actions';
export { PeersAction, peersActions } from './peers-actions';
export { QuoteAction, quoteActions } from './quote-actions';
export { TimeSeriesAction, timeSeriesActions } from './time-series-actions';
export { SearchAction, search } from './search-action';
export { EarningsAction, earningsActions } from './earnings-actions';

export {
  NEWS_ACTIONS_TYPES,
  OVERVIEW_ACTIONS_TYPES,
  KEY_STATS_ACTIONS_TYPES,
  QUOTE_ACTIONS_TYPES,
  PEERS_ACTIONS_TYPES,
  TIME_SERIES_ACTIONS_TYPES,
  EARNINGS_ACTIONS_TYPES,
} from './constants';

export type ApplicationActions =
  | NewsAction
  | OverviewAction
  | KeyStatsAction
  | TimeSeriesAction
  | PeersAction
  | QuoteAction
  | SearchAction
  | EarningsAction;
