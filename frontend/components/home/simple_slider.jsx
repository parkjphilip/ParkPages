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
      responsive: [
        { breakpoint: 900,
          settings: { slidesToShow: 1 ,  fade:true} },
          { breakpoint: 1400,
            settings: { slidesToShow: 2 } },
            { breakpoint: 10000,
              settings: { slidesToShow: 3  } }]
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
