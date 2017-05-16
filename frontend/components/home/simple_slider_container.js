import { connect } from 'react-redux';
import { fetchFeaturedParks } from '../../actions/park_actions';
import SimpleSlider from './simple_slider';


const mapStateToProps = ( state ) => {
  return ({
    parks: state.parks
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchFeaturedParks: () => dispatch(fetchFeaturedParks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSlider);
