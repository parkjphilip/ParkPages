import React from 'react';
import { Link, withRouter } from 'react-router';
import StarRating from 'react-star-rating';
// import ReviewIndexItem from './review_index_item';

class ReviewIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    star = <StarRating name="park-rating" className="stars" rating={this.props.review.rating} totalStars={5} />;
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
        <div>
          {star}
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewIndexItem);
