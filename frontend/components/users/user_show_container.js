import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUserReviews } from '../../actions/review_actions';


const mapStateToProps = ( state ) => {
  return ({
    reviews: state.reviews,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchUserReviews: userId => dispatch(fetchUserReviews(userId)),
    createUserPhoto: formData => dispatch(createUserPhoto(formData))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
