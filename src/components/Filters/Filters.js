import React from 'react';

const Filters = ({
	filters,
}) => {
	return(
		<section className = "filters">
			<h2>Filters</h2>
	             <p>
				{
	                  filters.length ?
	                    Object.keys(filters).map( i => {
	                      return(
           	                   <span key = {i}> {filters[i]}</span>
                            )
	                    })
	                    : 
	                    'No Filters'
	              }

                 </p>
		</section>
	)
}

export default Filters