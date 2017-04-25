import React from 'react';
import { Link, withRouter } from 'react-router';

class Search extends React.Component {
	constructor(props) {
		super(props);
    this.state = { query: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchParks(this.state.query);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.query} onChange={this.update("query")} className="home-search" placeholder="Find Park or Activity.." />
          <input type="image" value="submit" className="home-search-button home-search-glass" src="/images/glass.png" alt="search submit button" />
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
