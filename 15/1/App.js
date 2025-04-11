const { useState } = React

function Content() {
	const [joke, updateJoke] = useState()

	let jokes = ['Joke 1', 'Joke 2', 'Joke 3', 'Joke 4', 'Joke 5']

	function asd() {
		updateJoke(Math.floor(Math.random() * jokes.length))
	}

	return (
		<div>
			<p>{jokes[joke]}</p>
			<button onClick={asd}>Random Joke</button>
		</div>
	)
}

function Footer() {
	return <footer>Footer: Made by Aadivishnu Gajendra</footer>
}

function Header(props) {
	return <header>{props.title}</header>
}

function App() {
	return (
		<div className="App">
			<Header title="Random Joke generator" />
			<Content />
			<Footer />
		</div>
	)
}
