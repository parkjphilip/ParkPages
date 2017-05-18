import React from 'react';
import { Link, withRouter } from 'react-router';
import UserReviewsIndex from './user_reviews_index';
var Rating = require('react-rating');

class UserShow extends React.Component {

  componentWillMount() {
    this.props.fetchUserReviews(this.props.currentUser.id);
  }

	render() {
    if(Object.keys(this.props.reviews).length === 0) {
      return (
        <div>
          <div className="user-container-upper">
            <div className="user-upper-left">
              <img className="user-profile-picture" src="/images/useravatar.png" />
            </div>
            <div className="user-upper-right">
              <div className="user-greeting">Hello {this.props.currentUser.username}!</div>
            </div>
          </div>
          <div className="user-container-lower">
            <div className="user-reviews-intro">You have not written any reviews!</div>
          </div>
        </div>
      );
    } else {
      let reviewCount = Object.keys(this.props.reviews).length;
      return (
        <div>
          <div className="user-container-upper">
            <div className="user-upper-left">
              <img className="user-profile-picture" src="/images/useravatar.png" />
            </div>
            <div className="user-upper-right">
              <div className="user-greeting">Hello {this.props.currentUser.username}!</div>
              <div className="user-review-count">
                <Rating className="user-review-count-stars"
                  empty={<img height="28" width="28" src="images/star-empty.png"/>}
                  full={<img height="28" width="28" src="images/star-full.png"/>}
                  initialRate={1}
                  start={0}
                  stop={1}
                  readonly={true}
                />
                <div className="user-review-count-text">{reviewCount} reviews </div>
              </div>
            </div>
          </div>
          <div className="user-container-lower">
            <div className="user-reviews-intro" >Below are all of your reviews! </div>
            <UserReviewsIndex currentUser={this.props.currentUser} reviews={this.props.reviews} />
          </div>
        </div>
      );
    }
	}
}

export default withRouter(UserShow);
