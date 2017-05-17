import React from 'react';
import { Link, withRouter } from 'react-router';
import FeaturedPark from './featured_park';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {

  componentDidMount(){
    this.props.fetchFeaturedParks("");
  }
  componentWillMount(){
    this.props.fetchFeaturedParks("");
  }

	render() {
    var settings = {
      dots: true,
      arrows: true,
      autoplay: true,
      slidesToShow: 3,
    };
    if (Object.keys(this.props.parks).length === 0 || Object.keys(this.props.parks).length < 6){
      return <div></div>;
    } else {
    return (
      <div className="featured-parks">
        <div className="featured-title">Check out our Featured Parks!</div>
        <Slider className="slider" {...settings}>
          <div className="featured-park-container"><FeaturedPark park={this.props.parks[0]} /></div>
          <div className="featured-park-container"><FeaturedPark park={this.props.parks[1]} /></div>
          <div className="featured-park-container"><FeaturedPark park={this.props.parks[2]} /></div>
          <div className="featured-park-container"><FeaturedPark park={this.props.parks[3]} /></div>
          <div className="featured-park-container"><FeaturedPark park={this.props.parks[4]} /></div>
          <div className="featured-park-container"><FeaturedPark park={this.props.parks[5]} /></div>
        </Slider>
      </div>
		);
  }
  }
}

export default withRouter(SimpleSlider);


// <FeaturedPark park={this.props.parks[0]} />
// <FeaturedPark park={this.props.parks[1]} />
// <FeaturedPark park={this.props.parks[2]} />
// <FeaturedPark park={this.props.parks[3]} />
// <FeaturedPark park={this.props.parks[4]} />
// <FeaturedPark park={this.props.parks[5]} />
