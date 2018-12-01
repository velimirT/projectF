import React from 'react';

export default function Materials ({
	filter,
	handle_change,
	handle_filter_change,
	active_filter
}) {
	return (
		<span onClick = {()=> {handle_filter_change(filter[0].name)}} className={(filter[0].name === active_filter ? "active" :"")}>
			{filter[0].name} 
			{(filter[0].name === active_filter ? 
				<input name = "materials" onChange = {(e) => handle_change(filter[0].name, e.target.value)} value = {filter[0].value || ""}/> 
					: ""
			)}
		</span>
	);
}