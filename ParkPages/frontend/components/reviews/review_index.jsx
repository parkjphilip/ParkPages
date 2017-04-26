import React from 'react';
import { Link, withRouter } from 'react-router';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
	constructor(props) {
		super(props);
	}

  componentWillMount() {
    const currentId = this.props.currentParkId;
    this.props.fetchReviews(this.props.currentParkId);
  }

  render() {
    if (!this.props.reviews.length) {
      return (
        <div className="no-reviews-message">
          There are currently no reviews for this park. Be the first one to submit a review!
        </div>
      );
    } else {
      return (
        <div className="review-index">
          <div className="reviews-index-title">
            Reviews
          </div>
          { this.props.reviews.map((review, idx) => (<ReviewIndexItem key={idx} review={review} currentParkId={this.props.currentParkId} author={review.author}/>)) }
        </div>
      );
    }
	}
}

export default withRouter(ReviewIndex);
