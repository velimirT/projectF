import React from 'react';
import { withRouter } from 'react-router'

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: null,
			password: null
		}

		this.handleLogin = this.props.handleLogin;
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	handleSubmit(event) {
		alert('An essay was submitted: ' + this.state.value);
		event.preventDefault();
		this.handleLogin(this.state.username, this.state.password);
	}

	render(){


			if(this.props.logged === true){ 
				return(<button onClick={this.handleLogout}>Logout</button>)
			}else{
				return(
					<form  onSubmit={this.handleSubmit}>
					  <input type = "text" name = "username" placeholder = "username"  onChange = {this.handleUserChange}/>
					  <input type = "password" name = "password" placeholder = "password"  onChange = {this.handlePassChange}/>
			          <button>Login</button>
			        </form>
				)
			}
	}
}


export default withRouter(Login);
