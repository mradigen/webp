const { useState, useReducer } = React

function CounterWithUseState() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<h2>Counter with useState</h2>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
		</div>
	)
}

const counterReducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + 1 }
		case 'DECREMENT':
			return { count: state.count - 1 }
		default:
			return state
	}
}

function CounterWithUseReducer() {
	const [state, dispatch] = useReducer(counterReducer, { count: 0 })
	return (
		<div>
			<h2>Counter with useReducer</h2>
			<p>Count: {state.count}</p>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>
				Increase
			</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>
				Decrease
			</button>
		</div>
	)
}

function App() {
	return (
		<div>
			<CounterWithUseReducer />
		</div>
	)
}
