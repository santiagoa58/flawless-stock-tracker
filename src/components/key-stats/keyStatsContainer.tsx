import { connect } from 'react-redux';
import { KeyStatsList } from './keyStatsList';
import { keyStatsSelector } from './keyStatsSelector';
import { ApplicationState } from '../../states';
import { getQuote, getKeyStats } from '../../selectors';

const mapStateToProps = ({
  keyStatsState,
  quoteState,
  earningsState,
}: ApplicationState) => {
  return keyStatsSelector(
    keyStatsState.keyStats,
    quoteState.quote,
    earningsState.earnings
  );
};

export default connect(mapStateToProps)(KeyStatsList);
