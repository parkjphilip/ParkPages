import React from 'react';
import { Link, withRouter } from 'react-router';
import UserReviewsIndexItem from './user_reviews_index_item';

class UserReviewsIndex extends React.Component {

	render() {
		return (
      <ul className="user-review-index-container">
        {this.props.reviews.map((review,i) => <UserReviewsIndexItem key={`review-${i}`} review={review} />)}
      </ul>
		);
	}
}

export default withRouter(UserReviewsIndex);
