const { useState, useEffect } = React

function JokeFetcher() {
	const [joke, setJoke] = useState('')
	const [loading, setLoading] = useState(true)
	const fetchJoke = async () => {
		setLoading(true)
		try {
			const response = await fetch(
				'https://official-joke-api.appspot.com/random_joke',
			)
			const data = await response.json()
			setJoke(`${data.setup} ${data.punchline}`)
		} catch (error) {
			console.error('Error fetching joke:', error)
			setJoke('Failed to fetch joke. Please try again.')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchJoke()
	}, [])

	return (
		<div>
			<h2>Random Joke</h2>
			{loading ? <p>Loading joke...</p> : <p>{joke}</p>}
			<button onClick={fetchJoke}>Get New Joke</button>
		</div>
	)
}

function App() {
	return (
		<div>
			<JokeFetcher />
		</div>
	)
}
