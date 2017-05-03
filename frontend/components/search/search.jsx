import React from 'react';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {
	constructor(props) {
		super(props);
    this.state = { query: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  // componentWillMount() {
  //   this.setState({query: ""});
  // }
  handleSubmit(e){
    e.preventDefault();
    this.props.fetchParks(this.state.query);
    this.setState({ query: ""});
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render() {
    return (
        <form className="search-form" onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.query} onChange={this.update("query")} className="home-search" placeholder="Search by Park or Activity.." />
          <button type="submit" className="home-search-glass" />
        </form>
    );
  }
}

export default withRouter(Search);




// <div className="search-button-container">
// <input type="image" value="submit" className="home-search-button" alt="search submit button" >
// </input>
// <img className="home-search-glass" src="/images/glass.png" />
// </div>
