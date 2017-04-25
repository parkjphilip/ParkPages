import { connect } from 'react-redux';
// import { fetchPark, fetchParks } from '../../actions/park_actions';
import ReviewIndex from './review_index';


const mapStateToProps = ( state ) => {

  return ({
    parks: state.parks
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchParks: query => dispatch(fetchParks(query))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
