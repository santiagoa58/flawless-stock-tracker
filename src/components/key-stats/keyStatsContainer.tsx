import { connect } from 'react-redux';

import { KeyStatsList } from './keyStatsList';
import { keyStatsSelector } from './keyStatsSelector';
import { ApplicationState } from '../../states';

const mapStateToProps = ({
  keyStatsState,
  quoteState,
  earningsState,
}: ApplicationState) => {
  return keyStatsSelector(
    keyStatsState.payload,
    quoteState.payload,
    earningsState.payload
  );
};

export default connect(mapStateToProps)(KeyStatsList);
