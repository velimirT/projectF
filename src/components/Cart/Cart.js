import React from 'react';

const Cart = ({
	cart
}) => {
	return (
		<main>
		{
			cart.map((product, i) =>  
				<li key = {i}>
					<span className = "product_title">{product.title}</span>
					<span className = "current_order_qty"> x{product.current_order_qty} </span>
					<span className = "price"> ${product.price}</span>
				</li>
			)
		}
		</main>
	)
};

export default Cart;