import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './CartButton/containerCart.js';
import Login from './Login/containerLogin.js';
import './header.css';

const Header = ({logged}) => {

	return(
		<header>
			<Cart />
			<Login />
			{ logged && <Link to='/profile' replace >Profile</Link>}
		</header>
	)
}

export default Header;