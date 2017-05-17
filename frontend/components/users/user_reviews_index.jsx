import React from 'react';
import { Link, withRouter } from 'react-router';
import UserReviewsIndexItem from './user_reviews_index_item';

class UserReviewsIndex extends React.Component {

	render() {
		return (
      <div>
        <ul className="user-review-index-container">
          {this.props.reviews.map((review,i) => <UserReviewsIndexItem key={`review-${i}`} review={review} />)}
        </ul>
      </div>
		);
	}
}

export default withRouter(UserReviewsIndex);
