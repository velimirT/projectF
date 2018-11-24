import React from 'react';

const Order = (props) => {
  const { title, amount, qty } = props.value;
  return (
    <li>
      <span>{qty + ' '}</span>
      <span>{title + ' '}</span>
      <span>{amount + '$'}</span>
    </li>
  )
};

export default Order;