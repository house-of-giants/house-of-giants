import { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap, { TweenMax } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import StyledHero from '@/components/Hero/StyledHero'
import FeaturedFeed from '@/components/Project/FeaturedFeed'

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
	height: 40vh;
	justify-content: center;
	overflow: hidden;
	pointer-events: none;
	max-width: 100%;
	
	@media (min-width: 1024px) {
		height: 90vh;
		overflow: visible;
		width: 100vw;
	}

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
		z-index: 1;
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
			const mql = window.matchMedia('(min-width: 1024px)');
			const title = document.querySelector('.bgtext .title');
			const blurbLines = document.querySelectorAll('.y-up');
			TweenMax.to(
				title,
				1,
				{
					opacity: 1
				}
			).delay(1);

			if(mql.matches) {
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
	
			}

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
			<StyledHero className="textured">
				<div>
						<TypeBG ref={ref}>
							<div className="title">
								<p>House of Giants</p>
							</div>
						</TypeBG>
						<div className="blurbwrap">
							<div className="blurb">
								<p>
									<span className="y-up">Dreaming of <span className="line">innovation</span>, experimenting with </span>
									<span className="y-up"><span className="line">dedication</span>, creating web applications with <span className="line">purpose</span>. </span>
									<span className="y-up">Living in the pursuit of <span className="line">prosperity</span>, our greatest </span>
									<span className="y-up">accomplishments are ahead of us.</span>
								</p>
							</div>
						</div>
					</div>
			</StyledHero>
			<FeaturedFeed />
		</>
	)
}