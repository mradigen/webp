const canvas = document.getElementById('boatCanvas')
const ctx = canvas.getContext('2d')

let boatX = 150
let boatDirection = 1
const boatSpeed = 1
const boatWidth = 60

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	ctx.fillStyle = 'white'
	ctx.fillRect(0, 0, canvas.width, canvas.height)

	ctx.beginPath()
	ctx.arc(500, 80, 40, 0, Math.PI * 2)
	ctx.fillStyle = 'yellow'
	ctx.fill()

	ctx.strokeStyle = 'yellow'
	ctx.lineWidth = 3
	for (let i = 0; i < 12; i++) {
		const angle = (i * Math.PI) / 6
		const x1 = 500 + Math.cos(angle) * 40
		const y1 = 80 + Math.sin(angle) * 40
		const x2 = 500 + Math.cos(angle) * 60
		const y2 = 80 + Math.sin(angle) * 60

		ctx.beginPath()
		ctx.moveTo(x1, y1)
		ctx.lineTo(x2, y2)
		ctx.stroke()
	}

	ctx.beginPath()
	ctx.ellipse(300, 200, 150, 80, 0, Math.PI * 2, 0)
	ctx.fillStyle = 'lightblue'
	ctx.fill()
	ctx.strokeStyle = 'blue'
	ctx.lineWidth = 2
	ctx.stroke()

	ctx.beginPath()
	ctx.moveTo(boatX, 180)
	ctx.bezierCurveTo(boatX + 20, 190, boatX + 40, 190, boatX + 60, 180)
	ctx.lineTo(boatX + 50, 170)
	ctx.lineTo(boatX + 10, 170)
	ctx.closePath()
	ctx.fillStyle = 'brown'
	ctx.fill()
	ctx.strokeStyle = 'darkred'
	ctx.stroke()

	ctx.fillStyle = 'orange'
	ctx.fillRect(100, 200, 80, 80)

	ctx.beginPath()
	ctx.moveTo(90, 200)
	ctx.lineTo(140, 160)
	ctx.lineTo(190, 200)
	ctx.closePath()
	ctx.fillStyle = 'red'
	ctx.fill()

	ctx.fillStyle = 'brown'
	ctx.fillRect(140, 240, 20, 40)

	ctx.fillStyle = 'blue'
	ctx.fillRect(110, 220, 20, 20)

	ctx.beginPath()
	ctx.arc(450, 250, 20, 0, Math.PI * 2)
	ctx.fillStyle = 'yellow'
	ctx.fill()

	ctx.beginPath()
	ctx.arc(470, 240, 12, 0, Math.PI * 2)
	ctx.fill()

	ctx.beginPath()
	ctx.arc(475, 237, 3, 0, Math.PI * 2)
	ctx.fillStyle = 'black'
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(482, 240)
	ctx.lineTo(490, 243)
	ctx.lineTo(482, 246)
	ctx.closePath()
	ctx.fillStyle = 'orange'
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(520, 280)
	ctx.lineTo(520, 220)
	ctx.strokeStyle = 'green'
	ctx.lineWidth = 4
	ctx.stroke()

	ctx.beginPath()
	ctx.moveTo(520, 250)
	ctx.bezierCurveTo(530, 240, 540, 245, 535, 255)
	ctx.bezierCurveTo(540, 260, 530, 265, 520, 260)
	ctx.fillStyle = 'green'
	ctx.fill()

	ctx.beginPath()
	ctx.arc(520, 210, 15, 0, Math.PI * 2)
	ctx.fillStyle = 'pink'
	ctx.fill()

	ctx.beginPath()
	ctx.arc(535, 220, 15, 0, Math.PI * 2)
	ctx.fill()

	ctx.beginPath()
	ctx.arc(505, 220, 15, 0, Math.PI * 2)
	ctx.fill()

	ctx.beginPath()
	ctx.arc(520, 220, 8, 0, Math.PI * 2)
	ctx.fillStyle = 'yellow'
	ctx.fill()

	ctx.beginPath()
	ctx.arc(120, 320, 10, 0, Math.PI * 2)
	ctx.fillStyle = 'gray'
	ctx.fill()

	ctx.beginPath()
	ctx.arc(140, 330, 8, 0, Math.PI * 2)
	ctx.fill()

	ctx.beginPath()
	ctx.arc(130, 340, 12, 0, Math.PI * 2)
	ctx.fill()

	ctx.beginPath()
	ctx.arc(450, 330, 10, 0, Math.PI * 2)
	ctx.fill()

	ctx.beginPath()
	ctx.arc(470, 340, 8, 0, Math.PI * 2)
	ctx.fill()

	boatX += boatSpeed * boatDirection

	if (boatX > 400 - boatWidth || boatX < 150) {
		boatDirection *= -1
	}

	requestAnimationFrame(animate)
}

animate()
