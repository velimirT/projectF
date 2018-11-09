import React from 'react';
import Filters from './Filters';

const Search = ({
	search, 
	filters,
	handleSearchChange, 
	handleSearchClick
}) => {
	return(
		<div className = "search">
			<h1>Search</h1>
			<Filters filters = {filters}/>
			<input type = "text" name = "search" defaultValue = {search} onChange = {handleSearchChange} className = "searchInput"/>
			<button onClick = {handleSearchClick} className = "searchBtn">Search</button>
		</div>
	)
}

export default Search;