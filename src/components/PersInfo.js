import React from 'react';

function PersInfo(props) {
	return (
		<div className="pers">
			<h2>Name : {props.name}</h2>
			<h2>Age : {props.age}</h2>
		</div>
	);
}

export default PersInfo;
