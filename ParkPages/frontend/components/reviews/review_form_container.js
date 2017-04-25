import { connect } from 'react-redux';
import { createReview, fetchReviews } from '../../actions/review_actions';
import ReviewForm from './review_form';


const mapStateToProps = ( state ) => {
  return ({
    currentParkId: state.parks.park.id,
    currentUserId: state.session.currentUser.id
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    createReview: review => dispatch(createReview(review)),
    fetchReviews: (currentParkId) => dispatch(fetchReviews(currentParkId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
