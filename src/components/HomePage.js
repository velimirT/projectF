import React from 'react';
import Search from './Search/containerSearch';
import ProductsList from './products/ProductsList/containerProductsList';
import ProductOverlay from './products/ProductOveray/containerProductOverlay';

const HomePage = ({
	cart
}) => {
	return (
		<main>
          <Search />
          <ProductsList />
          <ProductOverlay />
		</main>
	)
};

export default HomePage;