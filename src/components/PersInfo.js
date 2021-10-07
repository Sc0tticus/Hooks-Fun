import React from 'react';

function PersInfo({ name, age }) {
	return (
		<div className="pers">
			<h2>Name : {name}</h2>
			<h2>Age : {age}</h2>
		</div>
	);
}

export default PersInfo;
