import { TweenMax } from "gsap"
import { useEffect, useRef, useState } from "react"
import SimplexNoise from 'simplex-noise'
import { paper } from 'paper'
import styled from "styled-components"

const StyledCursor = styled.div`
	& .cursor {
		filter: invert(1);
		mix-blend-mode: difference;
		position: fixed;
		left: 0;
		top: 0;
		pointer-events: none;
	}

	& .cursor--small {
		width: 5px;
		height: 5px;
		left: -2.5px;
		top: -2.5px;
		border-radius: 50%;
		z-index: 11000;
	}

	& .cursor--canvas {
		width: 100vw;
		height: 100vh;
		z-index: 12000;
	}
`

const Cursor = () => {
	const [mp, setMp] = useState({ x: '-100', y: '-100'})
	const cursorRef = useRef(null)
	const canvasRef = useRef(null)

	const updateMp = e => {
		setMp({ x: e.clientX, y: e.clientY })
	}

	const initCanvas = canvas => {
		let lastX = mp.x;
		let lastY = mp.y;

		paper.setup(canvas)

		const strokeColor = "rgba(3, 8, 9, 1)"
		const strokeWidth = 1
		const segments = 8
		const radius = 66
	
		const noiseScale = 150
		const noiseRange = 12
	
		const polygon = new paper.Path.RegularPolygon(
			new paper.Point(0, 0),
			segments,
			radius
		)
	
		polygon.strokeColor = strokeColor
		polygon.strokeWidth = strokeWidth
		polygon.fillColor = strokeColor
		polygon.smooth()
		const group = new paper.Group([polygon])
		group.applyMatrix = false
	
		const noiseObjects = polygon.segments.map(() => new SimplexNoise())
		let bigCoordinates = []
	
		const lerp = (a, b, n) => {
			return (1 - n) * a + n * b
		}
	
		const map = (value, in_min, in_max, out_min, out_max) => {
			return (
				((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
			)
		}
	
		paper.view.onFrame = event => {
			lastX = lerp(lastX, mp.x, 0.2)
			lastY = lerp(lastY, mp.y, 0.2)

			if (bigCoordinates.length === 0) {
				polygon.segments.forEach((segment, i) => {
					bigCoordinates[i] = [segment.point.x, segment.point.y]
				})
			} else {
				polygon.segments.forEach((segment, i) => {
					const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0)
					const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1)
		
					const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange)
					const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange)
		
					const newX = bigCoordinates[i][0] + distortionX
					const newY = bigCoordinates[i][1] + distortionY
		
					segment.point.set(newX, newY)
				})
			}
	

			group.position = new paper.Point(lastX, lastY)
		}


		polygon.smooth()
	}
	
	useEffect(() => {
		window.addEventListener('mousemove', updateMp)

		return () => window.removeEventListener('mousemove', updateMp)
	}, [])

	useEffect(() => {
		const innerCursor = cursorRef.current
		const canvas = canvasRef.current
		const render = () => {
			TweenMax.set(innerCursor, {
				x: mp.x,
				y: mp.y
			})
			requestAnimationFrame(render)
		}
		requestAnimationFrame(render)
		initCanvas(canvas)
	}, [mp])

	return (
		<StyledCursor>
			<div className="cursor cursor--small" ref={cursorRef}></div>
			<canvas className="cursor cursor--canvas" ref={canvasRef} resize="true"></canvas>
		</StyledCursor>
	)
}

export default Cursor