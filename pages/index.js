import { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import StyledHero from '@/components/Hero/StyledHero'
import HeroScene from '@/components/SVG/HeroScene'
import DisplayHeading from '@/components/Typography/DisplayHeading'
import ThreeEye from '@/components/SVG/ThreeEye'
import gsap, { TweenMax, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Spaceship from '@/components/SVG/Spaceship'
import Feed from '@/components/Project/Feed'

if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger)
	gsap.core.globals('ScrollTrigger', ScrollTrigger)
}

const TypeBG = styled.div.attrs({
	className: 'bgtext'
})`
	align-items: center;
	display: flex;
	flex-direction: column;
	font-size: 4rem;
	height: 100vh;
	justify-content: center;
	overflow: visible;
	pointer-events: none;
	width: 100vw;

	& svg {
		fill: var(--c-prmary);
		width: 100px;
	}

	& p {
		color: inherit;
		display: inline;
		font-size: inherit;
		margin: 0;
		white-space: nowrap;
	}

	& .title {
		color: var(--c-dark);
		font-family: gothicus, serif;
		line-height: 0;
		opacity: 0;
		text-align: center;
	}
`

function useHookWithRefCallback() {
	const ref = useRef(null);
	useEffect(() => {
		setTimeout(() => {
			ref.current.classList.add('loaded');
		}, 600);
	}, [])
	const setRef = useCallback(node => {
		if (ref.current) {
			// Make sure to cleanup any events/references added to the last instance
		}
		
		if (node) {
			const title = document.querySelector('.bgtext .title');
			const blurbLines = document.querySelectorAll('.y-up');
			TweenMax.to(
				title,
				1,
				{
					opacity: 1
				}
			).delay(1);

			const bigText = gsap.timeline({
				paused: true,
				fontSize: '9rem',
				scrollTrigger: {
					trigger: title,
					scrub: 0.75,
				}
			});

			bigText.from(title, {
				fontSize: '9rem',
			})

			bigText.to(title, {
				fontSize: '100vh',
				x: '-25%',
				ease: "power3.inOut"
			});

			const blurbText = gsap.timeline({
				paused: true,
				opacity: 0,
				y: '-100%',
				rotate: '6deg',
				scrollTrigger: {
					start: 'bottom bottom',
					trigger: '.blurb p',
				}
			});

			blurbText.staggerTo(blurbLines, 0.5, {
				ease: 'power3.inOut',
				y: '0',
				rotate: '0deg',
				opacity: 1
			}, 0.222);
		}
		
		// Save a reference to the node
		ref.current = node
	}, [])

	return [setRef]
}

export default function Home() {
	const [ref] = useHookWithRefCallback();
	return (
		<>
			<StyledHero>
				<div>
					<TypeBG ref={ref}>
						<div className="title">
							<p>House of Giants</p>
						</div>
					</TypeBG>
					<div className="blurbwrap">
						<div className="blurb">
							<h5><span className="y-up">Fig. <small>I</small></span></h5>
							<p>
								<span className="y-up">Dreaming of <span className="line">innovation</span>, experimenting with </span>
								<span className="y-up"><span className="line">dedication</span>, creating web applications with <span className="line">purpose</span>. </span>
								<span className="y-up">Living in the pursuit of <span className="line">prosperity</span>, our greatest </span>
								<span className="y-up">accomplishments are ahead of us.</span>
							</p>
						</div>
						<HeroScene />
					</div>
				</div>
			</StyledHero>
			<Feed />
		</>
	)
}