import React, { Component } from 'react';
import Cart from './CartButton/containerCart.js';
import Login from './Login/containerLogin.js';
import './header.css';

const Header = () => {
	return(
		<header>
			<Cart />
			<Login />
		</header>
	)
}

export default Header;