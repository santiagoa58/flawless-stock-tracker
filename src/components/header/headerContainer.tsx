import { HeaderLayout } from './headerLayout';
import { connect } from 'react-redux';
import { OverviewState } from '../../reducers/overview-reducer';
import { QuoteState } from '../../reducers/quote-reducer';
import { headerSelector } from './headerSelector';

interface Header {
  companyInfo: OverviewState;
  companyQuote: QuoteState;
}

const mapStateToProps = ({ companyInfo, companyQuote }: Header) =>
  headerSelector(companyInfo, companyQuote);

export const HeaderContainer = connect(
  mapStateToProps,
  null
)(HeaderLayout);
