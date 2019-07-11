import { connect } from 'react-redux';
import { KeyStatsList } from './keyStatsList';
import { keyStatsSelector } from './keyStatsSelector';
import { Quote, KeyStats } from '../../util';

interface StatsQuote {
  companyStats: { keyStats: KeyStats };
  companyQuote: { quote: Quote };
}

const mapStateToProps = ({ companyStats, companyQuote }: StatsQuote) => {
  return keyStatsSelector(companyStats.keyStats, companyQuote.quote);
};

export default connect(
  mapStateToProps,
  null
)(KeyStatsList);
