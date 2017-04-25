import React from 'react';
import ReactStars from 'react-stars';
import { Link, withRouter } from 'react-router';
// import ReviewIndexItem from './review_index_item';

class ReviewIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div>
        {this.props.review.body}
        <ReactStars count={5} size={24} edit={`false`} color2={'#ffd700'} />
      </div>
    );
  }
}

export default withRouter(ReviewIndexItem);
