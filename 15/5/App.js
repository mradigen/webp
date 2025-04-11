const { Component, useState } = React

class LifecycleDemo extends Component {
	constructor() {
		super()
		this.state = {
			count: 0,
		}
	}

	componentDidMount() {
		console.log('Component mounted')
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(prevProps)
		console.log(prevState)
		console.log('Component updated')
	}

	componentWillUnmount() {
		console.log('Component unmounted')
	}

	updateCount = () => {
		this.setState({ count: this.state.count + 1 })
	}

	render() {
		return (
			<div>
				<p>
					Count: {this.state.count} Prop text: {this.props.propText}
				</p>
				<button onClick={this.updateCount}>button</button>
			</div>
		)
	}
}

function App() {
	const [propText, setpropText] = useState('zzz')

	setTimeout(() => {
		setpropText('prop text updated zzzzzzzzz')
	}, 2000)
	return (
		<div>
			<LifecycleDemo propText={propText} />
		</div>
	)
}
