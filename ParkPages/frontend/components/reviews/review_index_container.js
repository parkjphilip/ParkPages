import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import { withRouter } from 'react-router';


const mapStateToProps = ( state, ownProps ) => {
  return ({
    reviews: state.reviews,
    currentParkId: ownProps.params.parkId
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchReviews: (currentParkId) => dispatch(fetchReviews(currentParkId))
  });
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
