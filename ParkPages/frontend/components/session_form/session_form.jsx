import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuestLogin = this.handleGuestLogin.bind(this);
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	componentWillReceiveProps(newProps){
		const currentPath = this.props.route.path;
		if (currentPath !== this.oldRoutePath){
			newProps.resetErrors();
		}
		this.oldRoutePath = currentPath;
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user)
							.then(() => this.props.router.push("/"));
	}

	handleGuestLogin(e) {
		e.preventDefault();
		this.props.loginGuest()
							.then(() => this.props.router.push("/"));;
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
  		return(
  			<ul>
  				{this.props.errors.map((error, i) => (
  					<li key={`${i}`}>
  						{error}
  					</li>
  				))}
  			</ul>
  		);
	}

	render() {
		return (
			<div className="login-form-header">
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						Welcome to ParkPages!
						<br/>
						Please {this.props.formType} or {this.navLink()}
						{this.renderErrors()}
						<div className="login-signup-form">
							<br/>
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" placeholder="Username"/>
							<br/>
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" placeholder="Password"/>
							<br/>
							<input type="submit" value="Submit" />
						</div>
					</form>
					<form onClick={this.handleGuestLogin}>
						<input type="submit" value="Guest Login"/>
					</form>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
