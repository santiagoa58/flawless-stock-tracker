import { HeaderLayout } from './headerLayout';
import { connect } from 'react-redux';
import { OverviewState } from '../../reducers/overview-reducer';
import { KeyStatsState } from '../../reducers/keystats-reducer';

interface RootReducer {
  companyInfo: OverviewState;
  companyStats: KeyStatsState;
}

const mapStateToProps = ({ companyInfo, companyStats }: RootReducer) => ({
  overview: companyInfo.overview,
  keyStats: companyStats.keyStats,
});

export const HeaderContainer = connect(
  mapStateToProps,
  null
)(HeaderLayout);
