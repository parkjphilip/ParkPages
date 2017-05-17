import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUserReviews } from '../../actions/review_actions';


const mapStateToProps = ( state ) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchUserReviews: userId => dispatch(fetchUserReviews(userId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
