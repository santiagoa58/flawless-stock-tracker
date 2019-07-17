import { connect } from 'react-redux';
import { FavoritesList } from './favoritesList';
import { ApplicationState } from '../../states';
import { ThunkDispatch } from 'redux-thunk';
import { ApplicationActions, favoritesActions } from '../../actions';

const mapStateToProps = ({ favoritesState }: ApplicationState) => {
  return { favorites: favoritesState.favorites };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, ApplicationActions>
) => ({
  getFavorites: () =>
    dispatch(favoritesActions.getData('fb,aapl,amzn,ko,nflx')),
});

export const FavoritesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesList);
