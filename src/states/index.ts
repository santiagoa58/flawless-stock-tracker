import { OverviewState } from './overview-state';
import { PeersState } from './peers-state';
import { QuoteState } from './quote-state';
import { NewsState } from './news-state';
import { KeyStatsState } from './keystats-state';
import { TimeSeriesState } from './time-series-state';
import { EarningsState } from './earnings-state';
import { FavoritesState } from './favorites-state';

export { OverviewState, overviewDefaultState } from './overview-state';
export { PeersState, peersDefaultState } from './peers-state';
export { QuoteState, quoteDefaultState } from './quote-state';
export { NewsState, newsDefaultState } from './news-state';
export { KeyStatsState, keyStatsDefaultState } from './keystats-state';
export { TimeSeriesState, timeSeriesDefaultState } from './time-series-state';
export { EarningsState, EarningsDefaultState } from './earnings-state';
export { FavoritesState, favoritesDefaultState } from './favorites-state';

export interface ApplicationState {
  newsState: NewsState;
  overviewState: OverviewState;
  peersState: PeersState;
  quoteState: QuoteState;
  keyStatsState: KeyStatsState;
  timeSeriesState: TimeSeriesState;
  earningsState: EarningsState;
  favoritesState: FavoritesState;
}
