import React from 'react';

const Order = (props) => {
  
  const { title, current_order_qty, id, qty, price} = props.value;
  const { changeQty, subtructFromQty, removeFromCart} = props;

  return (
    <li>
      <span>{title}</span>
      <span> x {current_order_qty} </span>
      <button
        onClick={() => subtructFromQty(id)}
        disabled={current_order_qty === 1}
      >{'<'}</button>
      <button
        onClick={() => changeQty(id)}
        disabled={current_order_qty === qty}
      >{'>'}</button>
      <span> ${price}</span>
      <button
        onClick={() => removeFromCart(id)}
      >Remove</button>
    </li>
  )
};

export default Order;