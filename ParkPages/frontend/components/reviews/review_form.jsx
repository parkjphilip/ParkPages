import React from 'react';
import { Link, withRouter } from 'react-router';
// import ParkIndexItem from './park_index_item';

//need to pass down current user and check if they are logged in

class ReviewForm extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <form>
        <div className="top-review-message"> Your review </div>
        <div> star input here </div>
        <textarea />
      </form>
    );
	}
}

export default withRouter(ReviewForm);
