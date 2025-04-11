const canvas = document.getElementById('clockCanvas')
const ctx = canvas.getContext('2d')
const radius = canvas.width / 2

ctx.translate(radius, radius)

const clockRadius = radius * 0.9

function drawClock() {
	ctx.clearRect(-radius, -radius, canvas.width, canvas.height)

	const now = new Date()
	const hours = now.getHours() % 12
	const minutes = now.getMinutes()
	const seconds = now.getSeconds()

	drawFace()

	drawNumbers()

	drawHand(hours * 30 + minutes * 0.5, clockRadius * 0.5, 6, 'black')
	drawHand(minutes * 6, clockRadius * 0.7, 4, 'blue')
	drawHand(seconds * 6, clockRadius * 0.8, 2, 'red')

	drawPivot()

	requestAnimationFrame(drawClock)
}

function drawFace() {
	ctx.beginPath()
	ctx.arc(0, 0, clockRadius, 0, Math.PI * 2)
	ctx.fillStyle = 'white'
	ctx.fill()

	ctx.beginPath()
	ctx.arc(0, 0, clockRadius, 0, Math.PI * 2)
	ctx.strokeStyle = 'black'
	ctx.lineWidth = 5
	ctx.stroke()

	ctx.beginPath()
	ctx.arc(0, 0, clockRadius * 0.05, 0, Math.PI * 2)
	ctx.fillStyle = 'black'
	ctx.fill()
}

function drawNumbers() {
	ctx.font = clockRadius * 0.15 + 'px Arial'
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'
	ctx.fillStyle = 'black'

	for (let hour = 1; hour <= 12; hour++) {
		const angle = (hour * Math.PI) / 6 - Math.PI / 2
		const x = clockRadius * 0.8 * Math.cos(angle)
		const y = clockRadius * 0.8 * Math.sin(angle)
		ctx.fillText(hour.toString(), x, y)
	}

	for (let i = 0; i < 60; i++) {
		const angle = (i * Math.PI) / 30 - Math.PI / 2
		let tickLength

		if (i % 5 === 0) {
			tickLength = clockRadius * 0.1
			ctx.lineWidth = 3
		} else {
			tickLength = clockRadius * 0.05
			ctx.lineWidth = 1
		}

		const x1 = (clockRadius - tickLength) * Math.cos(angle)
		const y1 = (clockRadius - tickLength) * Math.sin(angle)
		const x2 = clockRadius * Math.cos(angle)
		const y2 = clockRadius * Math.sin(angle)

		ctx.beginPath()
		ctx.moveTo(x1, y1)
		ctx.lineTo(x2, y2)
		ctx.strokeStyle = 'black'
		ctx.stroke()
	}
}

function drawHand(angle, length, width, color) {
	const radians = ((angle - 90) * Math.PI) / 180

	ctx.beginPath()
	ctx.lineWidth = width
	ctx.lineCap = 'round'
	ctx.strokeStyle = color

	ctx.moveTo(0, 0)
	ctx.lineTo(length * Math.cos(radians), length * Math.sin(radians))
	ctx.stroke()
}

function drawPivot() {
	ctx.beginPath()
	ctx.arc(0, 0, clockRadius * 0.03, 0, Math.PI * 2)
	ctx.fillStyle = 'red'
	ctx.fill()

	ctx.beginPath()
	ctx.arc(0, 0, clockRadius * 0.01, 0, Math.PI * 2)
	ctx.fillStyle = 'black'
	ctx.fill()
}

drawClock()
