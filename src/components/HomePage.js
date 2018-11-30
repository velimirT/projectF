import React from 'react';
import Search from './Search/containerSearch';
import ProductsList from './products/ProductsList/containerProductsList';
import ProductOverlay from './products/ProductOveray/containerProductOverlay';
import Categories from './Categories/containerCategories';

const HomePage = ({
	categories
}) => {
	return (
		<main>
          <Search />
          <Categories />
          <ProductsList />
          <ProductOverlay />
		</main>
	)
};

export default HomePage;