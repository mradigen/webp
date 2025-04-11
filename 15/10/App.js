const { useRef } = React

function FocusInput() {
	const inputRef = useRef(null)
	const handleFocus = () => {
		inputRef.current.focus()
	}

	return (
		<div>
			<h2>Focus Input with useRef</h2>
			<input ref={inputRef} type="text" placeholder="Type something..." />
			<button onClick={handleFocus}>Focus Input</button>
		</div>
	)
}

function App() {
	return (
		<div>
			<FocusInput />
		</div>
	)
}
