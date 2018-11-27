import React from 'react';
import PayButton from '../PayButton/containerPayButton';


const Cart = ({
	cart,
	logged,
	user,
	changeQty,
	subtructFromQty,
	removeFromCart
}) => {

	let amount = cart.reduce((acc, item) => acc + (item.price * item.current_order_qty), 0);

	return (
		<main>
			{
				cart.length ?
					<section>
						<ul>
							{
								cart.map((product, i) =>
									<li key={i}>
										<span className="product_title">{product.title}</span>
										<span className="current_order_qty"> x {product.current_order_qty} </span>
										<button
											onClick={() => subtructFromQty(product.id)}
											disabled={product.current_order_qty === 1}
										>{'<'}</button>
										<button
											onClick={() => changeQty(product.id)}
											disabled={product.current_order_qty === product.qty}
										>{'>'}</button>
										<span className="price"> ${product.price}</span>
										<button
											onClick={() => removeFromCart(product.id)}
										>Remove</button>
									</li>
								)
							}
						</ul>
						<p className="total">Total: ${amount.toFixed(2)}</p>
						{logged ? <PayButton amount={amount} /> : <h2>Please Login to procees with Checkout!</h2>}
					</section>
					:
					<h2>Your shopping cart is empty.</h2>
			}
		</main>
	)
};

export default Cart;