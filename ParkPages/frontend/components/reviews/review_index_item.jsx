import React from 'react';
import { Link, withRouter } from 'react-router';
import StarRating from 'react-star-rating';
// import ReviewIndexItem from './review_index_item';

class ReviewIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    debugger
    return (
      <div className="review-index-item">
        <div>
          {this.props.review.author}
        </div>
        <div>
          {this.props.review.rating}
        </div>
        <div>
          {this.props.review.body}
        </div>
        <StarRating className="stars" name="airbnb-rating" caption="Rate your stay!" rating={this.props.review.rating} totalStars={5} />
      </div>
    );
  }
}

export default withRouter(ReviewIndexItem);
