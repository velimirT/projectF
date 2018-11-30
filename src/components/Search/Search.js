import React from 'react';
import Filters from '../Filters/Filters';

const Search = ({
	searchValue,
	filters,
	setSearchValue,
	searchProducts,
	category,
	active_filter
}) => {
	return (
		<div className="search">
			<h1>Search</h1>
			<Filters filters={filters} />
			<input 
				type="text"
				name="search"
				defaultValue={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				className="searchInput"
				style={!active_filter ? {display:"block"} : {display:"none"}}
			/>
			<button 
				onClick={() => searchProducts(searchValue, filters, category)}
				className="searchBtn"
			>Search</button>
		</div>
	)
};

export default Search;

Search.defaultProps = {
	searchValue: 'Search default text'
};

