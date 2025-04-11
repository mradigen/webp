const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]
const sales = [65, 59, 80, 81, 56, 55, 40, 75, 92, 68, 45, 50]
const expenses = [28, 48, 40, 19, 86, 27, 90, 65, 59, 40, 38, 22]
const profit = sales.map((value, index) => value - expenses[index])

const categories = ['Electronics', 'Clothing', 'Food', 'Books', 'Home']
const categoryValues = [35, 25, 20, 10, 10]

function createBarChart() {
	const trace = {
		x: months,
		y: sales,
		type: 'bar',
		marker: {
			color: 'rgba(50, 171, 96, 0.7)',
		},
		name: 'Monthly Sales',
	}

	const layout = {
		title: 'Monthly Sales Data',
		xaxis: {
			title: 'Month',
		},
		yaxis: {
			title: 'Sales ($)',
		},
		autosize: true,
		margin: {
			l: 50,
			r: 50,
			b: 50,
			t: 50,
			pad: 4,
		},
	}

	Plotly.newPlot('barChart', [trace], layout)
}

function createLineChart() {
	const salesTrace = {
		x: months,
		y: sales,
		type: 'scatter',
		mode: 'lines+markers',
		name: 'Sales',
		line: {
			color: 'rgb(55, 128, 191)',
			width: 2,
		},
		marker: {
			color: 'rgb(55, 128, 191)',
			size: 8,
		},
	}

	const expensesTrace = {
		x: months,
		y: expenses,
		type: 'scatter',
		mode: 'lines+markers',
		name: 'Expenses',
		line: {
			color: 'rgb(219, 64, 82)',
			width: 2,
		},
		marker: {
			color: 'rgb(219, 64, 82)',
			size: 8,
		},
	}

	const profitTrace = {
		x: months,
		y: profit,
		type: 'scatter',
		mode: 'lines+markers',
		name: 'Profit',
		line: {
			color: 'rgb(50, 171, 96)',
			width: 2,
		},
		marker: {
			color: 'rgb(50, 171, 96)',
			size: 8,
		},
	}

	const layout = {
		title: 'Sales, Expenses, and Profit Over Time',
		xaxis: {
			title: 'Month',
		},
		yaxis: {
			title: 'Amount ($)',
		},
		autosize: true,
		margin: {
			l: 50,
			r: 50,
			b: 50,
			t: 50,
			pad: 4,
		},
	}

	Plotly.newPlot(
		'lineChart',
		[salesTrace, expensesTrace, profitTrace],
		layout,
	)
}

function createPieChart() {
	const trace = {
		labels: categories,
		values: categoryValues,
		type: 'pie',
		marker: {
			colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
		},
	}

	const layout = {
		title: 'Sales by Category',
		autosize: true,
		margin: {
			l: 50,
			r: 50,
			b: 50,
			t: 50,
			pad: 4,
		},
	}

	Plotly.newPlot('pieChart', [trace], layout)
}

function createDonutChart() {
	const trace = {
		labels: categories,
		values: categoryValues,
		type: 'pie',
		hole: 0.4,
		marker: {
			colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
		},
	}

	const layout = {
		title: 'Revenue Distribution',
		annotations: [
			{
				font: {
					size: 20,
				},
				showarrow: false,
				text: 'Categories',
				x: 0.5,
				y: 0.5,
			},
		],
		autosize: true,
		margin: {
			l: 50,
			r: 50,
			b: 50,
			t: 50,
			pad: 4,
		},
	}

	Plotly.newPlot('donutChart', [trace], layout)
}

function initCharts() {
	createBarChart()
	createLineChart()
	createPieChart()
	createDonutChart()

	window.addEventListener('resize', function () {
		Plotly.relayout('barChart', {
			autosize: true,
		})
		Plotly.relayout('lineChart', {
			autosize: true,
		})
		Plotly.relayout('pieChart', {
			autosize: true,
		})
		Plotly.relayout('donutChart', {
			autosize: true,
		})
	})
}

window.onload = initCharts
