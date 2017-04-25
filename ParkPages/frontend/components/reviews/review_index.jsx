import React from 'react';
import { Link, withRouter } from 'react-router';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <ReviewIndexItem />
    );
	}
}

export default withRouter(ReviewIndex);
