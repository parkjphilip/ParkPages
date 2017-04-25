import React from 'react';
import { Link, withRouter } from 'react-router';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';
var Rating = require('react-rating');

class ParkDetail extends React.Component {
	constructor(props) {
		super(props);
    this.state = this.props.currentPark;
	}

  componentWillMount(){
    this.props.fetchPark(this.props.parkId);
  }

  // componentWillMount() {
  //   this.props.fetchPark(this.props.parkId);
  // }

  // componentWillReceiveProps(newProps) {
  // if (this.props.params.id !== newProps.params.id) {
  //   this.props.fetchPark(newProps.params.id);
  //   }
  // }

  render() {
    if (!this.props.currentPark) {
      return <div>No result found</div>;
    } else {
      return (
        <div className="show-park-area">
          <div className="show-park-container-upper">
            <div className="show-park-info">
              <div className="detail-upper">
                <div className="detail-name">{this.props.currentPark.name} </div>
                <div className="detail-upper-bottom">
                  <div className="detail-rating">
                    <Rating
                      className="park-detail-stars"
                      empty={<img src="images/star-empty.png"/>}
                      full={<img src="images/star-full.png"/>}
                      initialRate={this.props.currentPark.avg_rating}
                      start={0}
                      stop={5}
                      readonly={true}
                    />                  </div>
                  <div className="detail-reviews">Number of reviews</div>
                  <div className="detail-tags">Basketball, Tennis, Dog-walking</div>
                </div>
              </div>
              <div className="detail-lower">
                <div className="detail-icon-address">
                  <i className="fa fa-address-card-o fa-2x" aria-hidden="true"></i>
                  <div className="detail-address">
                    <div className="detail-address1"> {this.props.currentPark.street}</div>
                    <div className="detail-address2"> {this.props.currentPark.city}, {this.props.currentPark.state} {this.props.currentPark.zip_code}</div>
                  </div>
                </div>
                <div className="detail-icon-phone">
                  <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                  <div className="detail-phone"> {this.props.currentPark.phone_number}</div>
                </div>
                <div className="detail-icon-website">
                  <i className="fa fa-external-link fa-2x" aria-hidden="true"></i>
                  <a className="detail-website" href={this.props.currentPark.website}>{this.props.currentPark.website}</a>
                </div>
              </div>
            </div>
            <div className="show-park-image-container">
              <img className="show-park-image" src={this.props.currentPark.image_url}/>
            </div>
          </div>
          <div className="show-park-container-lower">
            <div className="review-container">
              <ReviewIndexContainer currentParkId={this.props.currentPark.id} />
            </div>
            <div className="show-lower-right">
              <div className="show-map">
                <div> Google Maps here </div>
              </div>
              <div className="review-form">
                <ReviewFormContainer />
              </div>
            </div>
          </div>
        </div>

      );
    }
	}

}

// <ReviewIndexContainer currentParkId={this.props.currentPark.id}/>
export default withRouter(ParkDetail);
