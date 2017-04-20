import { connect } from 'react-redux';
import { fetchPark } from '../../actions/park_actions';
import ParkDetail from './park_detail';


const mapStateToProps = ( state, ownProps ) => {
  return ({
    parkId: ownProps.params.parkId
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchPark: id => dispatch(fetchPark(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ParkDetail);
