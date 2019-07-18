import { connect } from 'react-redux';

import { SearchInput } from './searchInput';
import { search } from '../../actions';
import { TD } from '../../action-creators';

const mapDispatchToProps = (dispatch: TD) => ({
  search: (symbol: string) => dispatch(search(symbol)),
});

export const SearchContainer = connect(
  null,
  mapDispatchToProps
)(SearchInput);
