import React from 'react';
import CartIcon from '../../../images/cart.png';
const Search = ({
	cart
}) => {
	return (
		<>
			<span><img src={CartIcon} alt = "Cart"/></span>
			{cart.length > 0 &&
			<span className="cart_quantity">
				{cart.length}
			</span>
			}
		</>
	)
};

export default Search;

Search.defaultProps = {
	searchValue: 'Search default text'
};

