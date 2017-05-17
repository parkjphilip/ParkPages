import React from 'react';
import { Link, withRouter } from 'react-router';
import UserReviewsIndex from './user_reviews_index';

class UserShow extends React.Component {

	render() {
		return (
      <div>
        <div className="user-container-upper">

        </div>
        <div className="user-container-lower">
          <UserReviewsIndex currentUser={this.props.currentUser} />
        </div>
      </div>
		);
	}
}

export default withRouter(UserShow);
