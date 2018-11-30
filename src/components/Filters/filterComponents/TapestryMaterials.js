import React from 'react';

export default function TapestryMaterails ({
	filter,
	handle_change,
	handle_filter_change,
	active_filter
}) {
	return (
		<span onClick = {()=> {console.log("New FIlter: ", filter[0].name); handle_filter_change(filter[0].name)}}>
			{filter[0].name} 
			{(filter[0].name === active_filter ? 
				<input name = "product_materials" onChange = {(e) => handle_change(filter[0].name, e.target.value)} value = {filter[0].value || ""}/> 
					: ""
			)}
		</span>
	);
};