import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';


const mapStateToProps = ( state ) => {

  return ({
    reviews: state.reviews,
    currentParkId: state.parks.park.id
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchReviews: () => dispatch(fetchReviews())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
