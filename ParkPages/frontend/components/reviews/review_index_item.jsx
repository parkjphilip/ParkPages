import React from 'react';
import { Link, withRouter } from 'react-router';
// import ReviewIndexItem from './review_index_item';

class ReviewIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return <div> Review Index Item here </div>;
	}
}

export default withRouter(ReviewIndexItem);
