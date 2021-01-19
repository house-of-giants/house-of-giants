import styled from 'styled-components'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { allProjects } from 'pages/api/projects'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';


if (typeof window !== `undefined`) {
	gsap.registerPlugin(ScrollTrigger)
	gsap.core.globals('ScrollTrigger', ScrollTrigger)
}


const StyledProject = styled.div`
	overflow: hidden;
	position: relative;
	
	& .hero-wrap {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 80vh;
		justify-content: center;
		overflow: hidden;
		margin-bottom: 4rem;
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
	padding-bottom: 4rem;

	& > *:not(img) {
		padding-left: 4rem;
		padding-right: 4rem;
		margin: 0 auto;
		max-width: 1280px;
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

	& .project-content {
		padding-bottom: 4rem;
		padding-top: 4rem;
	
		& p {
			font-size: 1.25rem;
			font-weight: 300;
			line-height: 1.75;

			@media(min-width: 768px) {
				font-size: 1.75rem;
			}

			& a {
				font-weight: 900;
			}
		}
	}
`

const ProjectInfo = styled.div`
	display: grid;
	grid-column-gap: 4rem;
	grid-template-columns: ${props => props.cols || 'repeat(auto-fit, minmax(230px, 1fr))'};
	padding-bottom: 4rem;

	& ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	& p,
	& ul {
		font-size: 1.75rem;
		font-weight: 600;
	}

	& .header {
		border-bottom: 1px solid var(--c-light-s);
		font-family: var(--f-body);
		font-size: 1.25rem;
		font-weight: 100;
	}
`

const ProjectImageGrid = styled.div`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(calc(50% - 4rem), 1fr));

	& .grid-item {
		position: relative;

		&::before {
			display: block;
			content: "";
			width: 100%;
			padding-top: calc((9 / 16) * 100%);
		}

		&:first-child {
			grid-column: 1 / -1;
			grid-row: 1;
		}
	}

	& img {
		height: 100%;
		object-fit: cover;
		object-position: center center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
`

const NextProject = styled.div`
	& a {
		align-items: center;
		box-shadow: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		height: 40vh;

		&:hover,
		&:focus {
			box-shadow: none;

			& img {
				filter: grayscale(0.7);
			}
		}
	}

	& p,
	& h2 {
		background-color: var(--c-light-h);
		padding: 0 1rem;
	}

	& p {
		font-size: 1.5rem;
		margin: 0;
	}

	& h2 {
		margin: 0;
	}

	& img {
		filter: grayscale(1);
		height: 100%;
		top: 0;
		position: absolute;
		object-fit: cover;
		width: 100%;
		z-index: -1;
	}
`

function Project({ project, nextProject }) {
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
		}, 0.7)

		tlO.to(titleText, {
			opacity: 1,
			ease: 'power3.inOut',
		})

		tlO.to(tech, {
			opacity: 1,
			y: 0,
			ease: 'power3.inOut',
		}, 1.5)

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
		<StyledProject className="textured">
			<div className="hero-wrap" ref={heroImgRef}>
				<div className="info">
					<h1 className="title">
						<span>{project.name}</span>
					</h1>
					<p>{project.tech.map((tech, i) => <span key={tech}>{tech}{i < project.tech.length - 1 ? ' / ' : ''}</span>)}</p>
				</div>
				<img src={project.images[0]} className="image"/>
			</div>
			<StyledSection ref={detailsRef}>
				<p>{project.excerpt}</p>
				<ProjectInfo>
					<div>
						<h4 className="header">client</h4>
						<p>{project.name}</p>
					</div>
					<div>
						<h4 className="header">categories</h4>
						<ul>
							{project.categories.map(cat => <li key={cat}>{cat}</li>)}
						</ul>
					</div>
					<div>
						<h4 className="header">tech</h4>
						<ul>
							{project.tech.map(tech => <li key="tech">{tech}</li>)}
						</ul>
					</div>
				</ProjectInfo>

				{project.images.length >= 2 && <div className="grid-item"><img src={project.images[1]} /></div> }

				{project.content && (
					<div className="project-content" dangerouslySetInnerHTML={{__html: project.content}} />
				)}

				<ProjectImageGrid>
					{project.images.length >= 3 && <div className="grid-item"><img src={project.images[2]} /></div> }
					{project.images.length >= 4 && <div className="grid-item"><img src={project.images[3]} /></div> }
					{project.images.length >= 5 && <div className="grid-item"><img src={project.images[4]} /></div> }
				</ProjectImageGrid>
			</StyledSection>
			<NextProject>
				<Link href={`/project/${nextProject.slug}`}>
					<a>
						<p>Next &rarr;</p>
						<h2 className="h1">{nextProject.name}</h2>
						<img src={nextProject.images[0]} />
					</a>
				</Link>
			</NextProject>
		</StyledProject>
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

	const projectIndex = (project) => project.slug === slug
	const project = allProjects.filter( project => project.slug === slug )
	const nextProject = allProjects.findIndex(projectIndex) === allProjects.length - 1 ? 0 : allProjects.findIndex(projectIndex) + 1

	return {
		props: {
			project: project[0],
			nextProject: allProjects[nextProject]
		}
	}
}

export default Project