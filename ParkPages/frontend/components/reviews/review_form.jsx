import React from 'react';
import { Link, withRouter } from 'react-router';
var Rating = require('react-rating');


//need to pass down current user and check if they are logged in

class ReviewForm extends React.Component {
	constructor(props) {
		super(props);
    this.state = { user_id: this.props.currentUserId, park_id: this.props.currentParkId, rating: 0, body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
	}

  handleSubmit(e) {
    e.preventDefault();
    let currentReview = this.state;
    this.props.createReview(currentReview)
              .then(() => this.props.fetchReviews(this.props.currentParkId));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateRating(e) {
    this.setState({
      rating: e
    });
  }

  render() {
    debugger
    if(this.props.currentUserId === 0) {
      return (
        <div>
          Please log in to submit a review!
        </div>
      );
    } else {
      return (
        <div className="review-form">
          <div className="top-review-message"> Write a Review!</div>
          <form onSubmit={this.handleSubmit}>
            <Rating
              className="review-form-stars"
              empty={<img src="images/star-empty.png"/>}
              full={<img src="images/star-full.png"/>}
              start={0}
              stop={5}
              fractions={2}
              initialRate={this.state.rating}
              onClick={this.updateRating}
              value={this.state.rating}
            />
            <textarea rows="15" cols="70" value={this.state.body} onChange={this.update("body")} className="review-body" placeholder="Your review goes here!"></textarea>
            <input type="submit" value="Post Review" />
          </form>
        </div>
      );
    }
	}
}

export default withRouter(ReviewForm);
