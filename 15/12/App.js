const { useRef, useState } = React

function FormWithUseState() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
	})

	const [submitted, setSubmitted] = useState(false)
	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
		console.log('Form submitted with:', formData)
	}

	return (
		<div>
			<h2>Form with useState</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email: </label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
			<div>
				<h3>Form Values (Updated Dynamically):</h3>
				<p>Name: {formData.name}</p>
				<p>Email: {formData.email}</p>
			</div>
			{submitted && (
				<div>
					<h3>Submitted Values:</h3>
					<p>Name: {formData.name}</p>
					<p>Email: {formData.email}</p>
				</div>
			)}
		</div>
	)
}

function FormWithUseRef() {
	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const [submittedData, setSubmittedData] = useState(null)

	const handleSubmit = (e) => {
		e.preventDefault()

		const formData = {
			name: nameRef.current.value,
			email: emailRef.current.value,
		}

		setSubmittedData(formData)
		console.log('Form submitted with:', formData)
	}

	return (
		<div>
			<h2>Form with useRef</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="nameRef">Name: </label>
					<input type="text" id="nameRef" ref={nameRef} />
				</div>
				<div>
					<label htmlFor="emailRef">Email: </label>
					<input type="email" id="emailRef" ref={emailRef} />
				</div>
				<button type="submit">Submit</button>
			</form>
			{submittedData && (
				<div>
					<h3>Submitted Values:</h3>
					<p>Name: {submittedData.name}</p>
					<p>Email: {submittedData.email}</p>
				</div>
			)}
		</div>
	)
}

function App() {
	return <FormWithUseRef />
}
