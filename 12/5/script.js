const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const container = document.getElementById('container')

const zIndex1Display = document.getElementById('z-index1')
const zIndex2Display = document.getElementById('z-index2')
const zIndex3Display = document.getElementById('z-index3')

let zIndex1 = 1
let zIndex2 = 2
let zIndex3 = 3

function increaseZIndex(elementId) {
	const element = document.getElementById(elementId)
	let zIndexDisplay

	switch (elementId) {
		case 'element1':
			zIndex1++
			element.style.zIndex = zIndex1
			zIndexDisplay = zIndex1Display
			break
		case 'element2':
			zIndex2++
			element.style.zIndex = zIndex2
			zIndexDisplay = zIndex2Display
			break
		case 'element3':
			zIndex3++
			element.style.zIndex = zIndex3
			zIndexDisplay = zIndex3Display
			break
	}

	zIndexDisplay.textContent = element.style.zIndex
}

function decreaseZIndex(elementId) {
	const element = document.getElementById(elementId)
	let zIndexDisplay

	switch (elementId) {
		case 'element1':
			if (zIndex1 > 0) zIndex1--
			element.style.zIndex = zIndex1
			zIndexDisplay = zIndex1Display
			break
		case 'element2':
			if (zIndex2 > 0) zIndex2--
			element.style.zIndex = zIndex2
			zIndexDisplay = zIndex2Display
			break
		case 'element3':
			if (zIndex3 > 0) zIndex3--
			element.style.zIndex = zIndex3
			zIndexDisplay = zIndex3Display
			break
	}

	zIndexDisplay.textContent = element.style.zIndex
}

function bringToFront(elementId) {
	const highestZIndex = Math.max(zIndex1, zIndex2, zIndex3) + 1

	switch (elementId) {
		case 'element1':
			zIndex1 = highestZIndex
			element1.style.zIndex = zIndex1
			zIndex1Display.textContent = zIndex1
			break
		case 'element2':
			zIndex2 = highestZIndex
			element2.style.zIndex = zIndex2
			zIndex2Display.textContent = zIndex2
			break
		case 'element3':
			zIndex3 = highestZIndex
			element3.style.zIndex = zIndex3
			zIndex3Display.textContent = zIndex3
			break
	}
}

function sendToBack(elementId) {
	const lowestZIndex = Math.min(zIndex1, zIndex2, zIndex3) - 1

	switch (elementId) {
		case 'element1':
			zIndex1 = lowestZIndex < 0 ? 0 : lowestZIndex
			element1.style.zIndex = zIndex1
			zIndex1Display.textContent = zIndex1
			break
		case 'element2':
			zIndex2 = lowestZIndex < 0 ? 0 : lowestZIndex
			element2.style.zIndex = zIndex2
			zIndex2Display.textContent = zIndex2
			break
		case 'element3':
			zIndex3 = lowestZIndex < 0 ? 0 : lowestZIndex
			element3.style.zIndex = zIndex3
			zIndex3Display.textContent = zIndex3
			break
	}
}

function resetZIndices() {
	zIndex1 = 1
	zIndex2 = 2
	zIndex3 = 3

	element1.style.zIndex = zIndex1
	element2.style.zIndex = zIndex2
	element3.style.zIndex = zIndex3

	zIndex1Display.textContent = zIndex1
	zIndex2Display.textContent = zIndex2
	zIndex3Display.textContent = zIndex3
}

function makeDraggable(element) {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0

	element.onmousedown = dragMouseDown

	function dragMouseDown(e) {
		e = e || window.event
		e.preventDefault()

		pos3 = e.clientX
		pos4 = e.clientY
		document.onmouseup = closeDragElement

		document.onmousemove = elementDrag

		bringToFront(element.id)
	}

	function elementDrag(e) {
		e = e || window.event
		e.preventDefault()

		pos1 = pos3 - e.clientX
		pos2 = pos4 - e.clientY
		pos3 = e.clientX
		pos4 = e.clientY

		const containerRect = container.getBoundingClientRect()
		const elementRect = element.getBoundingClientRect()

		const maxX = containerRect.width - elementRect.width
		const maxY = containerRect.height - elementRect.height

		const newTop = element.offsetTop - pos2
		const newLeft = element.offsetLeft - pos1

		element.style.top =
			(newTop < 0 ? 0 : newTop > maxY ? maxY : newTop) + 'px'
		element.style.left =
			(newLeft < 0 ? 0 : newLeft > maxX ? maxX : newLeft) + 'px'
	}

	function closeDragElement() {
		document.onmouseup = null
		document.onmousemove = null
	}
}

makeDraggable(element1)
makeDraggable(element2)
makeDraggable(element3)
