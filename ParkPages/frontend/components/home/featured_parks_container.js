import { connect } from 'react-redux';
import { fetchFeaturedParks } from '../../actions/park_actions';
import FeaturedParks from './featured_parks';


const mapStateToProps = ( state ) => {
  // debugger
  return ({
    parks: state.parks
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchFeaturedParks: () => dispatch(fetchFeaturedParks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedParks);
