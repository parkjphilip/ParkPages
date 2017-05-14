import { connect } from 'react-redux';
import { fetchPark, fetchParks } from '../../actions/park_actions';
import ParkDetail from './park_detail';


const mapStateToProps = ( state, ownProps ) => {
  return ({
    parkId: ownProps.params.parkId,
    currentPark: state.parks.park
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchPark: id => dispatch(fetchPark(id)),
    fetchParks: () => dispatch(fetchParks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ParkDetail);
