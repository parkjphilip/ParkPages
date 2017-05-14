import React from 'react';
import { Link, withRouter } from 'react-router';
var Rating = require('react-rating');

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
    if (this.state.body === "") {
      alert('Please provide text for your review.');
    } else {
            this.props.createReview(currentReview)
            .then(() => this.props.fetchPark(this.props.currentParkId))
            .then(() => this.props.fetchReviews(this.props.currentParkId))
            .then(() => this.setState({rating: 0, body: ""}));
          }
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
    if(this.props.currentUserId === 0) {
      return (
        <div className="login-to-review">
          Please log in to submit a review!
        </div>
      );
    } else {
      return (
        <div>
          <div className="top-review-message"> Write a Review!</div>
          <form className="review-submit-form" onSubmit={this.handleSubmit}>
            <Rating
              className="review-form-stars"
              empty={<img height="40" width="40" src="images/star-empty.png"/>}
              full={<img height="40" width="40" src="images/star-full.png"/>}
              start={0}
              stop={5}
              fractions={2}
              initialRate={this.state.rating}
              onClick={this.updateRating}
              value={this.state.rating}
            />
            <textarea rows="8" cols="40" value={this.state.body} onChange={this.update("body")} className="review-body" placeholder="Your review goes here!"></textarea>
            <input className="review-submit-button cursor-pointer" type="submit" value="Post Review" />
          </form>
        </div>
      );
    }
	}
}

export default withRouter(ReviewForm);
