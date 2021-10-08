import React, { useState } from 'react';
import './App.css';

function initialState() {
	console.log('expensive process:' + Date.now());
	return 0;
}

export default function App() {
	const [count, setCount] = useState(() => initialState());

	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}

// function App() {
// 	// setCount is a function which is going to change the value of the "i"
// 	// i is the State
// 	const [i, setCount] = useState(0);
// 	const addValue = () => {
// 		setCount(i + 1);
// 		console.log(i);
// 	};

// 	return (
// 		<div className="App">
// 			<h1>{i}</h1>
// 			<button onClick={addValue}>Increment</button>
// 		</div>
// 	);
// }

// export default App;
