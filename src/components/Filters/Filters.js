import React from 'react';
import * as filter_components from './filterComponents/FilterComponents';

const Filters = ({
	filters,
	choose_filter
}) => {
	console.log("Filter Components", filter_components);
	return(
		<section className = "filters">
			<h2>Filters</h2>
	             <p>
				{
	                  filters.length ?
	                    Object.keys(filters).map( i => {
	                      let FilterComponent = filter_components[filters[i].name];
	                      if(FilterComponent){
		                      return(
	           	                   <FilterComponent key = {i} onClick = {()=> {console.log("Clicked!"); choose_filter(i)}}/>
	                            )
	                      }
	                    })
	                    : 
	                    'No Filters'
	              }

                 </p>
		</section>
	)
}

export default Filters