import React from 'react';

const Cart = ({
	categories,
	chooseCategory
}) => {
				if(categories.length){
					return (
						<ul>
							{
								categories.map((category, i) =>
									<li key={i} onClick = {(e)=>{chooseCategory(i)}}>
										{category.name}
									</li>
								)
							}
						</ul>
					) 
				}else{
					return(<h2>No categories found.</h2>)		
				}
}

export default Cart;