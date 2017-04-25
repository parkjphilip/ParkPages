import { connect } from 'react-redux';
// import { fetchPark, fetchParks } from '../../actions/park_actions';
import ReviewForm from './review_form';


const mapStateToProps = ( state ) => {
  return ({
    parks: state.parks
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    createReview: review => dispatch(createReview(review))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
