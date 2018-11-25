import React from 'react';
import Order from '../Order/containerOrder';

class Orders extends React.Component {

  componentDidMount() {
    console.log('orders mounted');
    const { getUserOrders } = this.props;
    getUserOrders();
  }

  componentWillUnmount(){
    console.log('orders unmounted');
  }

  render() {
    const { orders } = this.props;

    const amount = orders && orders.reduce((acc, item) => acc + (item.amount * item.qty), 0).toFixed(2);

    return (
      <div>
      {orders.length > 0 ?
        <div>
          <ul>
            {orders.map((item, index) => <Order key={index} value={item} />)}
          </ul>
          <p>Total: {amount}$</p>
        </div>
        : <p>No orders yet</p>}
      </div>
    )
  }
};

export default Orders;




