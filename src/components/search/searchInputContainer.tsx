import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { SearchInput } from './searchInput';
import { search, ApplicationActions } from '../../actions';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, ApplicationActions>
) => ({
  search: (symbol: string) => dispatch(search(symbol)),
});

export const SearchContainer = connect(
  null,
  mapDispatchToProps
)(SearchInput);
