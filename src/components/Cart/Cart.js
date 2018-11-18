import React from 'react';
import PayButton from '../PayButton/containerPayButton';
const Cart = ({
	cart,
	logged,
	user
}) => {
	let amount = cart.reduce((acc, cur)=> acc + cur.price, 0);
	return (
		<main>
		{
			cart.length ?
				<section>
					<ul>
						{
							cart.map((product, i) =>  
							<li key = {i}>
								<span className = "product_title">{product.title}</span>
								<span className = "current_order_qty"> x{product.current_order_qty} </span>
								<span className = "price"> ${product.price}</span>
							</li>
							)
						}
					</ul>
					<p className = "total">Total: ${amount}</p>
					{logged && <PayButton amount = {amount}/>}
				</section>
				 :
					<h2>Your shopping cart is empty.</h2>
		}
		</main>
	)
};

export default Cart;