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
		if (newProps.formType !== this.props.formType){
			this.props.resetErrors();
		}
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
							.then(() => this.props.router.push("/parks"));
	}

	handleGuestLogin(e) {
		e.preventDefault();
		this.props.loginGuest()
							.then(() => this.props.router.push("/"));
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in</Link>;
		}
	}

	renderErrors() {
  		return(
  			<ul className="login-signup-errors">
  				{this.props.errors.map((error, i) => (
  					<li key={`${i}`}>
  						{error}
  					</li>
  				))}
  			</ul>
  		);
	}

	render() {
		let action = this.props.formType;
		return (
			<div className="login-submit-page">

				<div className="login-form-header">
          <img className="header-logo cursor-pointer" onClick={()=>{this.props.router.push("/");}} src="/images/ParkPages.png" />
				</div>

				<div className="login-form-container">

						<form onSubmit={this.handleSubmit} className="login-page-left">
							<h1 className="login-welcome">Welcome to ParkPages!</h1>
							<h1 className="please-message">Please {this.props.formType} or {this.navLink()} instead</h1>
							{this.renderErrors()}
							<div className="login-signup-form">
								<input type="text" value={this.state.username} onChange={this.update("username")} className="login-input-username" placeholder="Username"/>
								<input type="password" value={this.state.password} onChange={this.update("password")} className="login-input-password" placeholder="Password"/>
								<input type="submit" value={this.props.formType} className="login-submit cursor-pointer"/>
							</div>
							<form onClick={this.handleGuestLogin}>
								<input type="submit" className="guest-submit cursor-pointer" value="Guest Login"/>
							</form>
						</form>
            <div className='login-page-right'>
					     <img className="login-signup-image" src="/images/login.jpg" />
            </div>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
