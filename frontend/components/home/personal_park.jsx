import React from 'react';
import { Link, withRouter } from 'react-router';
var Rating = require('react-rating');

class PersonalPark extends React.Component {

  render() {
    return (
      <div className="personal-park">
        <img className="personal-image cursor-pointer" height="150" width="180" src="/images/philippark.jpg/" onClick={()=>{this.props.router.push(`/parks/13`);}} />
        <div className="featured-lower">
          <div className="personal-detail-1"> Philip Park - Leonia, NJ </div>
          <div className="featured-detail-2">
            <Rating
              className="featured-stars"
              empty={<img height="20" width="20" src="images/star-empty.png"/>}
              full={<img height="20" width="20" src="images/star-full.png"/>}
              initialRate={5}
              start={0} stop={5} readonly={true}
            /> - 100 reviews
          </div>
          <div className="featured-detail-3">
            Programming, Problem Solving, Basketball, Hiking
          </div>
          <a href="https://linkedin.com/in/philipjpark" className="personal-detail-1 cursor-pointer">LinkedIn</a>
          <a href="https://github.com/parkjphilip" className="personal-detail-1 cursor-pointer">GitHub</a>
        </div>
      </div>
    );
  }

}

export default withRouter(PersonalPark);
