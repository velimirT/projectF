import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './CartButton/containerCart.js';
import Login from './Login/containerLogin.js';
import './header.css';
import HomeIcon from '../../images/home.png';
import ProfileIcon from '../../images/profile.png';
import OrdersIcon from '../../images/orders.png';

const Header = ({logged}) => {

	return(
		<header>
			<nav>
				<ul>
					<li><Link to='/' replace><img src={HomeIcon} alt = "Home"/></Link></li>
					<li className = "login_btn"><Login /></li>
					{ logged && <li><Link to='/profile' replace ><img src={ProfileIcon} alt = "Profile"/></Link></li>}
					{ logged && <li><Link to='/orders' replace ><img src={OrdersIcon} alt = "Orders"/></Link></li>}
					<li className = "cart_nav_wrapper"><Link to='/cart'><Cart /></Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;