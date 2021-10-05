import { useEffect } from 'React'
import logo from './logo.svg'
import './App.css'
import useQueryOnce from 'react-query-use-once'
import axios from 'axios'

async function fetchCharacters() {
	const { data } = await axios.get('https://swapi.dev/api/people/')
	return data
}

function App() {
	const { data } = useQueryOnce('characters', fetchCharacters)
	useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
