import { connect } from 'react-redux';

import { HeaderLayout } from './headerLayout';
import { ApplicationState } from '../../states';
import { getOverview, getQuote } from '../../selectors';

const mapStateToProps = (state: ApplicationState) => ({
  overview: getOverview(state),
  quote: getQuote(state),
});

export const HeaderContainer = connect(mapStateToProps)(HeaderLayout);
