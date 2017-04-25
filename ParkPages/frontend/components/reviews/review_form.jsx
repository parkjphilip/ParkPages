import React from 'react';
import { Link, withRouter } from 'react-router';

//need to pass down current user and check if they are logged in

class ReviewForm extends React.Component {
	constructor(props) {
		super(props);
	}

  handleSubmit(e) {
    e.preventDefault();
      this.props.createReview(e.currentTarget.value);
  }

  render() {
    return (
      <div className="review-form">
        <div className="top-review-message"> Write a Review!</div>
        <form onSubmit={this.handleSubmit}>
          <textarea rows="15" cols="70" className="review-body" placeholder="Your review goes here!">
          </textarea>
          <input type="submit" value="Post Review" />
        </form>
      </div>
    );
	}
}

export default withRouter(ReviewForm);
