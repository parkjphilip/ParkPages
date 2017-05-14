import { connect } from 'react-redux';
import { createReview, fetchReviews } from '../../actions/review_actions';
import { fetchPark } from '../../actions/park_actions';
import ReviewForm from './review_form';


const mapStateToProps = ( state ) => {
  let checkCurrentUser = 0;
  if (state.session.currentUser === null) {
    checkCurrentUser = 0;
  } else {
    checkCurrentUser = state.session.currentUser.id;
  }
  return ({
    currentParkId: state.parks.park.id,
    currentUserId: checkCurrentUser
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    createReview: review => dispatch(createReview(review)),
    fetchReviews: (currentParkId) => dispatch(fetchReviews(currentParkId)),
    fetchPark: id => dispatch(fetchPark(id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
