import { connect } from 'react-redux';

import { HeaderLayout } from './headerLayout';
import { ApplicationState } from '../../states';
import {
  quoteActions,
  ApplicationActions,
  favoritesActions,
} from '../../actions';
import { headerSelector } from './headerSelector';
import { ThunkDispatch } from 'redux-thunk';

const mapStateToProps = ({ overviewState, quoteState }: ApplicationState) =>
  headerSelector(overviewState.overview, quoteState.quote);

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, ApplicationActions>
) => ({
  getFavorites: () =>
    dispatch(favoritesActions.getData('fb,aapl,amzn,ko,nflx')),

  getLatestUpdate: (symbol: string) => dispatch(quoteActions.getData(symbol)),
});

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLayout);
