import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PersInfo from './components/PersInfo';

function App() {
	// setCount is a function which is going to change the value of the "i"
	// i is the State
	const [i, setCount] = useState(0);
	const addValue = () => {
		setCount(i + 1);
		console.log(i);
	};

	return (
		<div className="App">
			<h1>{i}</h1>
			<button onClick={addValue}>Increment</button>
		</div>
	);
}

export default App;
