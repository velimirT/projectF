import React from 'react';

const Search = ({
	cart
}) => {
	return (
		<div className="cart_button">
			<p>Items: {cart.length}</p>
		</div>
	)
};

export default Search;

Search.defaultProps = {
	searchValue: 'Search default text'
};

