import React from 'react';

const button = ({number, addOne, subtractOne}) => {
  return(
    <div>
      <p>Count: {number}</p>
      <button onClick={addOne} >Plus</button>
      <button onClick={subtractOne}>Minus</button>
    </div>
  )
}

export default button;