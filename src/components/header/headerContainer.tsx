import { HeaderLayout } from './headerLayout';
import { connect } from 'react-redux';
import { OverviewState } from '../../reducers/overview-reducer';
import { QuoteState } from '../../reducers/quote-reducer';

interface RootReducer {
  companyInfo: OverviewState;
  companyQuote: QuoteState;
}

const mapStateToProps = ({ companyInfo, companyQuote }: RootReducer) => ({
  overview: companyInfo.overview,
  quote: companyQuote.quote,
});

export const HeaderContainer = connect(
  mapStateToProps,
  null
)(HeaderLayout);
