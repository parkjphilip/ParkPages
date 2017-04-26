import React from 'react';
import { Link, withRouter } from 'react-router';
var Rating = require('react-rating');

class ReviewIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="review-index-item">
        <div className="review-index-author">
          {this.props.review.author}
        </div>
        <div>
          <div className="review-index-body">
            {this.props.review.body}
          </div>
          <div>
            <Rating
              className="review-index-stars"
              empty={<img height="28" width="28" src="images/star-empty.png"/>}
              full={<img height="28" width="28" src="images/star-full.png"/>}
              initialRate={this.props.review.rating}
              start={0}
              stop={5}
              readonly={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewIndexItem);
