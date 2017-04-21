import { connect } from 'react-redux';
import { fetchPark, fetchParks } from '../../actions/park_actions';
import ParkIndex from './park_index';


const mapStateToProps = ( state ) => {
  return ({
    parks: state.parks
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchPark: id => dispatch(fetchPark(id)),
    fetchParks: () => dispatch(fetchParks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ParkIndex);
