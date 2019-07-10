import { connect } from 'react-redux';
import { SearchInput } from './searchInput';
import { search, SearchAction } from '../../actions/search-action';
import { ThunkDispatch } from 'redux-thunk';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, SearchAction>) => ({
  search: (symbol: string) => dispatch(search(symbol)),
});

export const SearchContainer = connect(
  null,
  mapDispatchToProps
)(SearchInput);
