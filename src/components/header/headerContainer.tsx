import { connect } from 'react-redux';

import { HeaderLayout } from './headerLayout';
import { ApplicationState } from '../../states';
import { headerSelector } from './headerSelector';

const mapStateToProps = ({ overviewState, quoteState }: ApplicationState) =>
  headerSelector(overviewState.overview, quoteState.quote);

export const HeaderContainer = connect(mapStateToProps)(HeaderLayout);
