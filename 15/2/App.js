function StyledButton() {
	return (
		<button
			style={{ backgroundColor: 'lightblue', padding: 10, fontSize: 20 }}
		>
			Inline CSS
		</button>
	)
}

function App() {
	return (
		<div>
			<StyledButton />
		</div>
	)
}
