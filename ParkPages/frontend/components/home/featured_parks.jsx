import React from 'react';
import { Link, withRouter } from 'react-router';

class FeaturedParks extends React.Component {

  componentWillMount(){
    this.props.fetchParks("");
  }

	render() {
		return (
      <div>
        <div className="featured-park">
          <div className="featured-park-upper">
          </div>
          <div className="featured-park-lower">
          </div>
        </div>
        <div className="featured-park">
          <div className="featured-park-upper">
          </div>
          <div className="featured-park-lower">
          </div>
        </div>
        <div className="featured-park">
          <div className="featured-park-upper">
          </div>
          <div className="featured-park-lower">
          </div>
        </div>
        <div className="featured-park">
          <div className="featured-park-upper">
          </div>
          <div className="featured-park-lower">
          </div>
        </div>
        <div className="featured-park">
          <div className="featured-park-upper">
          </div>
          <div className="featured-park-lower">
          </div>
        </div>
        <div className="featured-park">
          <div className="featured-park-upper">
          </div>
          <div className="featured-park-lower">
          </div>
        </div>
      </div>
		);
	}
}

export default withRouter(FeaturedParks);
