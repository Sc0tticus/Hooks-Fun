import logo from './logo.svg';
import './App.css';
import PersInfo from './components/PersInfo';

function App() {
	return (
		<div className="App">
			<PersInfo name="Name1" age="34" />
			<PersInfo name="Name2" age="45" />
			<PersInfo name="Name3" age="23" />
		</div>
	);
}

export default App;
