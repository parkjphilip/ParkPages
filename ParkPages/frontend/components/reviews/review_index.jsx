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
        <div className="reviews-loading-message">
          Reviews Loading...
        </div>
      );
    } else {
      return (
        <div className="review-index">
          { this.props.reviews.map((review, idx) => (<ReviewIndexItem key={idx} review={review} currentParkId={this.props.currentParkId} />)) }
        </div>
      );
    }
	}
}

export default withRouter(ReviewIndex);
