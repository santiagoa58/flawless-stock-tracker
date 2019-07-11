import { connect } from 'react-redux';
import { KeyStatsList } from './keyStatsList';
import { keyStatsSelector } from './keyStatsSelector';
import { ApplicationState } from '../../states';
import { getQuote, getKeyStats } from '../../selectors';

const mapStateToProps = (state: ApplicationState) => {
  return keyStatsSelector(getKeyStats(state), getQuote(state));
};

export default connect(mapStateToProps)(KeyStatsList);
