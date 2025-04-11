function StyledButton() {
	return (
		<div>
			<style>
				{`
				button {
					background-color: orange;
					padding: 10;
					font-size: 20;
				}
				`}
			</style>
			<button>Internal CSS</button>
		</div>
	)
}

function App() {
	return (
		<div>
			<StyledButton />
		</div>
	)
}
