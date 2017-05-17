import React from 'react';
import { Link, withRouter } from 'react-router';
import UserReviewsIndex from './user_reviews_index';

class UserShow extends React.Component {

  componentWillMount() {
    this.props.fetchUserReviews(this.props.currentUser.id);
  }

	render() {
    if(Object.keys(this.props.reviews).length === 0) {
      return (
        <div>
          <div className="user-container-upper">
            <img className="user-profile-picture" src="/images/useravatar.png" />
            <div className="user-greeting">Hello {this.props.currentUser.username}!</div>
          </div>
          <div className="user-no-reviews">You have not written any reviews!</div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="user-container-upper">
            <img className="user-profile-picture" src="/images/useravatar.png" />
            <div className="user-greeting">Hello {this.props.currentUser.username}!</div>
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
