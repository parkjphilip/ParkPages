import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUserReviews } from '../../actions/review_actions';
import { fetchPark } from '../../actions/park_actions';

const mapStateToProps = ( state ) => {
  return ({
    reviews: state.reviews,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchUserReviews: userId => dispatch(fetchUserReviews(userId)),
    fetchPark: parkId => dispatch(fetchPark(parkId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
