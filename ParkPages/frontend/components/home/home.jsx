import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';
import FeaturedParksContainer from './featured_parks_container';

class Home extends React.Component {
	render() {

		return (
      <div>
        <div className="image-box">
          <img className="home-logo" src="/images/ParkPages.png" alt="Logo" />
        </div>
        <div className="tag-category-buttons">
          <button className="tag-category-button" onClick={()=>{this.props.router.push("parks?query=Playground");}}>
            Playground
          </button>
          <button className="tag-category-button" onClick={()=>{this.props.router.push("parks?query=Basketball");}}>
            Basketball
          </button>
          <button className="tag-category-button" onClick={()=>{this.props.router.push("parks?query=Relaxing");}}>
            Relaxing
          </button>
          <button className="tag-category-button" onClick={()=>{this.props.router.push("parks?query=Barbecue");}}>
            Barbecue
          </button>
        </div>
        <div className="featured-parks-container">
          <FeaturedParksContainer />
        </div>
      </div>
		);
	}
}

export default withRouter(Home);
