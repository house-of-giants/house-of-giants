import Link from 'next/link'
import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import styled from 'styled-components'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger)
	gsap.core.globals('ScrollTrigger', ScrollTrigger)
	ScrollTrigger.config({ limitCallbacks: true })
}

const StyledCard = styled.div`
	align-items: center;
	background-color: var(--c-light-h);
	display: grid;
	grid-template-columns: 3fr 2fr;
	min-height: 100vh;
	overflow: hidden;

	&:nth-child(2n) {
		grid-template-columns: 2fr 3fr;

		& .image {
			order: 2;
		}
	}

	& .image {
		position: relative;
		height: 100%;
	}

	& img {
		height: 150%;
		left: 0;
		opacity: 0;
		max-width: 150%;
		object-fit: cover;
		opacity: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	& .blurb {
		opacity: 0;
		padding: 4rem;

		& h2 {
			font-family: var(--f-heading);
			font-weight: 900;
			font-size: 8rem;
			line-height: 1;
		}

		& p {
			font-size: 2rem;
			color: var(--c-dark-s);
		}

		& a {
			font-family: var(--f-heading);
			font-size: 2rem;
			font-weight: 500;
		}
	}
`

const ProjectCard = ({ image, name, excerpt }) => {
	const cardRef = useRef(null);
	const blurbRef = useRef(null);

	useEffect(() => {
		const img = cardRef.current.querySelector(`.image img`);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: cardRef.current,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			}
		})

		const tlO = gsap.timeline({
			scrollTrigger: {
				trigger: cardRef.current,
				start: 'top bottom',
			}
		})

		tlO.to(img, {
			opacity: 1,
			ease: 'power3.inOut',
		}, 0.3)

		tl.to(img, {
			y: -(img.offsetHeight / 5),
			ease: 'none'
		}, 0)
	}, [cardRef])

	useEffect(() => {
		const tlBlurb = gsap.timeline({
			scrollTrigger: {
				trigger: blurbRef.current,
				start: 'top center',
			}
		})

		tlBlurb.to(blurbRef.current, {
			opacity: 1,
			ease: 'power3.inOut'
		})
	}, [blurbRef])

	return (
		<>
			<StyledCard ref={cardRef}>
				<div className="image">
					<img src={image} />
				</div>
				<div className="blurb" ref={blurbRef}>
					<h2>{name}</h2>
					<p>{excerpt}</p>
					<Link href="/">
						<a>more</a>
					</Link>
				</div>
			</StyledCard>
		</>
	)
}

export default ProjectCard