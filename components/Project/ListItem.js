
import Link from 'next/link'
import { useCallback, useRef } from 'react'
import gsap from 'gsap'
import { clamp, getMousePos, map, lerp } from '@/utils/animationHelpers'

// track the mouse position
let mousepos = {x: 0, y: 0};
// cache the mouse position
let mousePosCache = mousepos;
let direction = {x: mousePosCache.x - mousepos.x, y: mousePosCache.y - mousepos.y};
// update mouse position when moving the mouse
if (typeof window !== 'undefined') {
	window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
}

function useHookWithRefCallback(animateable) {
	const ref = useRef(null);
	const setRef = useCallback(node => {
		if (node) {
			let requestId;
			let firstRAFCycle;
			let bounds;
			const reveal = node.querySelector('.project-reveal')
			const revealImage = node.querySelector('img')
			const revealMeta = node.querySelector('.project-meta')
			const revealTitle = node.querySelector('.project-title')

			const calcBounds = () => {
				bounds = {
					el: node.getBoundingClientRect(),
					reveal: reveal.getBoundingClientRect()
				}
			}

			const showImage = () => {
				gsap.killTweensOf(reveal)
				gsap.killTweensOf(revealImage)

				const tl = gsap.timeline({
					onStart: () => {
						reveal.style.opacity = 1
						revealTitle.style.backgroundColor = 'var(--c-light-h)'
						revealMeta.style.backgroundColor = 'var(--c-dark)'
						revealMeta.style.opacity = 1
						gsap.set(node, {zIndex: 2})
					}
				})
				.to(reveal, {
					duration: 0.2,
					ease: 'Sine.easeOut',
					startAt: {x: direction.x < 0 ? '-100%' : '100%'},
					x: '0%'
				})
				.to(revealImage, {
					duration: 0.2,
					ease: 'Sine.easeOUt',
					startAt: {x: direction.x < 0 ? '100%' : '-100%'},
					x: '0%'
				}, 0)
			}

			const hideImage = () => {
				gsap.killTweensOf(reveal)
				gsap.killTweensOf(revealImage)

				const tl = gsap.timeline({
					onStart: () => {
						gsap.set(node, {zIndex: 1})
						gsap.set(revealMeta, {opacity: 0})
						gsap.set(revealTitle, {backgroundColor: 'transparent'})
						gsap.set(revealMeta, {backgroundColor: 'transparent'})
					},
					onComplete: () => {
						gsap.set(reveal, {opacity: 0})
					}
				})
				.to(reveal, {
					duration: 0.2,
					ease: 'Sine.easeOut',
					x: direction.x <= 0 ? '100%' : '-100%'
				})
				.to(revealImage, {
					duration: 0.2,
					ease: 'Sine.easeOUt',
					x: direction.x <= 0 ? '-100%' : '100%'
				}, 0)
			}

			const mouseenterFn = () => {
				showImage()
				firstRAFCycle = true
				loopRender()
			}

			const mouseleaveFn = () => {
				stopRendering()
				hideImage()
			}

			node.addEventListener('mouseenter', mouseenterFn)
			node.addEventListener('mouseleave', mouseleaveFn)

			const loopRender = () => {
				if (!requestId) {
					requestId = requestAnimationFrame(() => render());
				}
			}

			const stopRendering = () => {
				if (requestId) {
					window.cancelAnimationFrame(requestId)
					requestId = undefined
				}
			}

			const render = () => {
				requestId = undefined
				if (firstRAFCycle) {
					calcBounds()
				}
				
				const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100)
				// direction where the mouse is moving
				direction = {x: mousePosCache.x - mousepos.x, y: mousePosCache.y - mousepos.y};
				// updated cache values
				mousePosCache = {x: mousepos.x, y: mousepos.y};

				animateable.tx.current = Math.abs(mousepos.x-bounds.el.left)-bounds.reveal.width/2;
				animateable.ty.current = Math.abs(mousepos.y-bounds.el.top)-bounds.reveal.height/2;
				// new rotation value
				animateable.rotation.current = firstRAFCycle ? 0 : map(mouseDistanceX,0,100,0,direction.x < 0 ? 60 : -60);
				// new filter value
				animateable.brightness.current = firstRAFCycle ? 1 : map(mouseDistanceX,0,100,0,10);

				// set up the interpolated values
				// for the first cycle, both the interpolated values need to be the same so there's no "lerped" animation between the previous and current state
				animateable.tx.previous = firstRAFCycle ? animateable.tx.current : lerp(animateable.tx.previous, animateable.tx.current, animateable.tx.amt);
				animateable.ty.previous = firstRAFCycle ? animateable.ty.current : lerp(animateable.ty.previous, animateable.ty.current, animateable.ty.amt);
				animateable.rotation.previous = firstRAFCycle ? animateable.rotation.current : lerp(animateable.rotation.previous, animateable.rotation.current, animateable.rotation.amt);
				animateable.brightness.previous = firstRAFCycle ? animateable.brightness.current : lerp(animateable.brightness.previous, animateable.brightness.current, animateable.brightness.amt);

				// set styles
				gsap.set(reveal, {
					x: animateable.tx.previous,
					y: animateable.ty.previous,
					rotation: animateable.rotation.previous,
					filter: `blur(${animateable.brightness.previous}px)`
				});

				firstRAFCycle = false
				loopRender()
			}

		}
		
		// Save a reference to the node
		ref.current = node
	}, [])

	return [setRef]
}

const ListItem = ({project, animateable}) => {
	const [ref] = useHookWithRefCallback(animateable)

	return (
		<div className="project-item" key={project.slug} ref={ref}>
			<Link href={`project/${project.slug}`}>
				<a>
					<span className="project-title h2">
						{project.name}
					</span>
					<span className="project-meta">{project.tech}</span>
					<div className="project-reveal">
						<div className="project-image">
							<img src={project.image} />
						</div>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default ListItem