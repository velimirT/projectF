import React, { Component } from 'react';
import Cart from './CartButton/containerCart.js';
import './header.css';

const Header = () => {
	return(
		<header>
			<Cart />
		</header>
	)
}

export default Header;