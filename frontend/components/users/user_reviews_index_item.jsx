import React from 'react';
import { Link, withRouter } from 'react-router';
var Rating = require('react-rating');

class UserReviewsIndexItem extends React.Component {

	render() {

    let timestamp = new Date(this.props.review.date);
    let newTimestamp = timestamp.toLocaleDateString();
    return (
      <div className="user-review-index-item">
        <div className="user-review-index-author-info">
          <div className="user-show-park-name">
            {this.props.review.park.name}
          </div>
          <div>
            - {newTimestamp}
          </div>
        </div>
        <div className="user-review-index-info">
          <Rating
            className="review-index-stars"
            empty={<img height="28" width="28" src="images/star-empty.png"/>}
            full={<img height="28" width="28" src="images/star-full.png"/>}
            initialRate={this.props.review.rating}
            start={0}
            stop={5}
            readonly={true}
            fractions={2}
          />
          <div className="review-index-body">
            {this.props.review.body}
          </div>
        </div>
      </div>
    );
	}
}

export default withRouter(UserReviewsIndexItem);
