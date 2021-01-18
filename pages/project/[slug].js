import styled from 'styled-components'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { allProjects } from 'pages/api/projects'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger)
	gsap.core.globals('ScrollTrigger', ScrollTrigger)
}


const StyledProjectHero = styled.div`
	position: relative;

	& .hero-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 80vh;
		overflow: hidden;
		position: relative;
		text-align: center;
	}

	& .info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		text-align: center;
		width: 100%;
		z-index: 1;

		& h1 {
			background-color: var(--c-secondary-h);
			white-space: nowrap;
		}

		& p {
			background-color: var(--c-dark-s);
			color: var(--c-light-h);
			font-size: 1rem;
			font-weight: 100;
			position: relative;
			top: 1rem;
		}

		& h1,
		& p {
			margin: 0;
			padding: 0;
		}
	}

	& .image {
		position: absolute;
		left: 0;
		object-fit: cover;
		object-position: center center;
		top: -40%;
		height: 140%;
		width: 100%;
		z-index: 0;

		& img {
			height: 100%;
		}
	}
`

const StyledSection = styled.div`
	border-bottom: 1px solid var(--c-light-s);
	display: grid;
	grid-template-columns: 2fr 3fr;
	padding: 4rem;

	&:not(:last-child) {
		border-bottom: 1px solid var(--c-light-s);
	}

	& h2 {
		margin: 0;
	}

	& p {
		font-size: 1.5rem;
		margin-top: 0;
	}

	& img {
		max-width: 100%;
		overflow: hidden;
	}
`

function Project({ project }) {
	const heroImgRef = useRef(null)
	const detailsRef =useRef(null)

	useEffect(() => {
		const img = heroImgRef.current.querySelector(`img`);
		const title = heroImgRef.current.querySelector(`h1`);
		const titleText = heroImgRef.current.querySelector(`h1 span`);
		const tech = heroImgRef.current.querySelector(`p`);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: heroImgRef.current,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			}
		})

		const tlO = gsap.timeline()

		tlO.set(img, {
			opacity: 0,
		})

		tlO.set(title, {
			width: 0
		})

		tlO.set(titleText, {
			opacity: 0
		})

		tlO.set(detailsRef.current, {
			opacity: 0,
			y: 25
		})

		tlO.set(tech, {
			opacity: 0,
			y: -25
		})

		tlO.to(img, {
			opacity: 1,
			ease: 'power3.inOut',
		}, 0.3)

		tlO.to(title, {
			width: 'auto',
			ease: 'power3.inOut',
		}, 1)

		tlO.to(titleText, {
			opacity: 1,
			ease: 'power3.inOut',
		})

		tlO.to(tech, {
			opacity: 1,
			y: 0,
			ease: 'power3.inOut',
		}, 2)

		tlO.to(detailsRef.current, {
			opacity: 1,
			y: 0,
			ease: 'power3.inOut'
		})

		tl.to(img, {
			y: (img.offsetHeight / 3),
			ease: 'none'
		}, 0)
	}, [heroImgRef])

	return (
		<StyledProjectHero>
			<div className="hero-wrap" ref={heroImgRef}>
				<div className="info">
					<h1 className="title">
						<span>{project.name}</span>
					</h1>
					<p>{project.tech}</p>
				</div>
				<img src={project.image} className="image"/>
			</div>
			<StyledSection ref={detailsRef}>
				<div>
					<h2>Abstract</h2>
					<p>Custom WordPress theme development with emphasis on performance, accessibility, and editorial experience</p>
				</div>
				<div>
					<img src={project.image} />
				</div>
			</StyledSection>
		</StyledProjectHero>
	)
}

export async function getStaticPaths() {
	const paths = allProjects.map( project => {
		return {
			params: {
				slug: project.slug
			}
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const { slug } = context.params

	const project = allProjects.filter( project => project.slug === slug )

	return {
		props: {
			project: project[0]
		}
	}
}

export default Project