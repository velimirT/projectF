import React from 'react';
import Order from '../Order/containerOrder';

const Orders = ({ cart }) => {

  const amount = cart.reduce((acc, item) => acc + (item.price * item.current_order_qty), 0);

  return (
    <div>
      {cart.length > 0 ?
        <div>
          <ul>
            {cart.map((item, index) => <Order key={index} value={item} />)}
          </ul>
          <p>Total: {amount}</p>
        </div>
        : <p>No orders yet</p>}
    </div>
  )
};

export default Orders;