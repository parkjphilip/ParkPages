import React from 'react';
import { Link, withRouter } from 'react-router';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import ParkMap from '../maps/park_map';
var Rating = require('react-rating');

class ParkDetail extends React.Component {
	constructor(props) {
		super(props);
    this.state = this.props.currentPark;
	}

  componentWillMount(){
    this.props.fetchPark(this.props.parkId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.parkId != newProps.parkId){
      this.props.fetchPark(this.props.parkId);
    }
  }

  render() {
    if (!this.props.currentPark) {
      return <div className="spinner"></div>;
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
                      empty={<img height="28" width="28" src="images/star-empty.png"/>}
                      full={<img height="28" width="28" src="images/star-full.png"/>}
                      initialRate={this.props.currentPark.avg_rating}
                      start={0} stop={5} readonly={true} fractions={2}
                    />
                  </div>
                  <div className="detail-reviews">{this.props.currentPark.num_ratings} total reviews</div>
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
                <ParkMap currentPark={this.props.currentPark} className="map"/>
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
