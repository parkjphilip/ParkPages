import { connect } from 'react-redux';
import { fetchParks } from '../../actions/park_actions';
import Search from './search';

const mapStateToProps = state => {
  return ({});
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchParks: function (query) {
      dispatch(fetchParks(query)) ;
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
