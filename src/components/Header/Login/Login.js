import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import LogoutIcon from '../../../images/login.png';
import LoginIcon from '../../../images/logout.png';


class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: null,
			password: null,
			login_form_shown: false
		}

		this.handleLogin = this.props.handleLogin;
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleLoginForm = this.toggleLoginForm.bind(this);
	}

	handleLogout = () => {
		const { handleLogout, history } = this.props;
		if(history.location.pathname !== '/') history.push('/');
		handleLogout();
	}

	handleUserChange(e){
		this.setState({username: e.target.value});
	}
	
	handlePassChange(e){
		this.setState({password: e.target.value});
	}

	toggleLoginForm(){
		this.setState({login_form_shown: !this.state.login_form_shown});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.handleLogin(this.state.username, this.state.password);
	}

	render(){

			if(this.props.logged === true){ 
				return(<img src = {LogoutIcon} onClick = {this.handleLogout} alt = "Logout"/>)
			}else if(this.state.login_form_shown){
				return (
							<>
							<form  onSubmit={this.handleSubmit}>
							  <input type = "text" name = "username" placeholder = "username"  onChange = {this.handleUserChange}/>
							  <input type = "password" name = "password" placeholder = "password"  onChange = {this.handlePassChange}/>
					          <button>Submit</button>
					        </form>
					        <Link to='/register' replace onClick={this.toggleLoginForm}>Register</Link>
					        </>
				)			        
			}else{
				return(<img src = {LoginIcon} onClick = {this.toggleLoginForm} alt = "Login"/>)
			}
	}
}


export default withRouter(Login);
