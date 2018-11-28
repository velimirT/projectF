import React from 'react';

export default function Materials ({
	filter,
	handle_change,
	key,
	active_filter
}) {
	return (
		<span>
			{filter[0].name} 
			{(key === active_filter ? <input name = "materials" onChange = {(e) => handle_change(filter[0].name, e.target.value)}/> : "")}
		</span>
	);
}