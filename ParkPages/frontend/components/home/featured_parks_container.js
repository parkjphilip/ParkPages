import { connect } from 'react-redux';
import { fetchPark, fetchParks } from '../../actions/park_actions';
import FeaturedParks from './featured_parks';


const mapStateToProps = ( state ) => {
  return ({
    parks: state.parks
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchParks: (query) => dispatch(fetchParks(query))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedParks);
