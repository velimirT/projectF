import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './CartButton/containerCart.js';
import Login from './Login/containerLogin.js';
import './header.css';

const Header = ({logged}) => {

	return(
		<header>
			<Link to='/cart'><Cart /></Link>
			<Login />
			<Link to='/' replace>Home</Link>
			{ !logged && <Link to='/register' replace >Register</Link>}
			{ logged && <Link to='/profile' replace >Profile</Link>}
			{ logged && <Link to='/orders' replace >Orders</Link>}
		</header>
	)
}

export default Header;