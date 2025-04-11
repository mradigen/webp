function Child({ message }) {
	return (
		<div>
			<p>{message}</p>
		</div>
	)
}

function Parent() {
	return (
		<div>
			<Child message="This is a message passed from Parent to Child"></Child>
		</div>
	)
}

function App() {
	return (
		<div>
			<Parent />
		</div>
	)
}
