import React from 'react';
import { Link, withRouter } from 'react-router';
import UserReviewsIndex from './user_reviews_index';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserReviews(this.props.currentUser.id);
  }

  updateFile(e) {
    e.preventDefault();
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();

    var file = this.state.imageFile;
    debugger
    formData.append("user[image]", file);
    formData.append("user[id]", this.props.currentUser.id);
    // let formData = {photo: {image: file, park_id: id}};

    this.props.createUserPhoto(formData);
  }

	render() {
    if(Object.keys(this.props.reviews).length === 0) {
      return (
        <div>
          <div className="user-container-upper">
            <div className="user-proflie-picture"> Profile Image here</div>
          </div>
          <div className="user-no-reviews">You have not written any reviews!</div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="user-container-upper">
            <div className="user-proflie-picture"> Profile Image here</div>
            <input type="file" onChange={this.updateFile}/>
            <button onClick={this.handleSubmit} className="user-submit-photo-button">Add a photo!</button>
          </div>
          <div className="user-container-lower">
            <UserReviewsIndex currentUser={this.props.currentUser} reviews={this.props.reviews}/>
          </div>
        </div>
      );
    }
	}
}

export default withRouter(UserShow);
