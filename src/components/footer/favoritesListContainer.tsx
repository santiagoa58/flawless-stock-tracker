import { connect } from 'react-redux';

import { FavoritesList } from './favoritesList';
import { ApplicationState } from '../../states';
import { favoritesActions } from '../../actions';
import { TD } from '../../util';

const mapStateToProps = ({ favoritesState }: ApplicationState) => {
  return { favorites: favoritesState.payload };
};

const mapDispatchToProps = (dispatch: TD) => ({
  getFavorites: () =>
    dispatch(favoritesActions.getData('fb,aapl,amzn,ko,nflx')),
});

export const FavoritesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesList);
