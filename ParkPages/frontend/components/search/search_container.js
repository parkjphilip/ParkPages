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

// const mapDispatchToProps = ( dispatch ) => {
//   return ({
//     debugger
//     fetchParks: query => dispatch(fetchParks(query))
//   });
// };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
