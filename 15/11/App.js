const { useContext, useState, createContext } = React

const ThemeContext = createContext()

function ThemeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false)
	const toggleTheme = () => {
		setDarkMode(!darkMode)
	}

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

function useTheme() {
	return useContext(ThemeContext)
}

function ThemedApp() {
	const { darkMode } = useTheme()
	const themeStyles = {
		backgroundColor: darkMode ? '#333' : '#fff',
		color: darkMode ? '#fff' : '#333',
		padding: '20px',
		minHeight: '100vh',
	}

	return (
		<div style={themeStyles}>
			<h1>Themed App</h1>
			<p>Current theme: {darkMode ? 'Dark' : 'Light'}</p>
			<ThemedButton />
		</div>
	)
}

function ThemedButton() {
	const { darkMode, toggleTheme } = useTheme()
	const buttonStyles = {
		backgroundColor: darkMode ? '#555' : '#eee',
		color: darkMode ? '#fff' : '#333',
		padding: '10px 20px',
		border: 'none',
		borderRadius: '4px',
		cursor: 'pointer',
	}

	return (
		<button style={buttonStyles} onClick={toggleTheme}>
			Toggle to {darkMode ? 'Light' : 'Dark'} Mode
		</button>
	)
}

function App() {
	return (
		<ThemeProvider>
			<ThemedApp />
		</ThemeProvider>
	)
}
