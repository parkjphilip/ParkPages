import React from 'react';
import ReactStars from 'react-stars';
import { Link, withRouter } from 'react-router';

//need to pass down current user and check if they are logged in

class ReviewForm extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="review-form">
        <form>
          <div className="top-review-message"> Write a Review!</div>
          <ReactStars count={5} size={24} color2={'#ffd700'} />
          <textarea rows="15" cols="70" className="review-body" placeholder="Your review goes here!">
          </textarea>
        </form>
      </div>
    );
	}
}

export default withRouter(ReviewForm);
