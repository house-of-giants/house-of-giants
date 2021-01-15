import styled from 'styled-components'
import { allProjects } from 'pages/api/projects'

const StyledProjectHero = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	position: relative;

	& .title {
		grid-row: 1;
		grid-column: 1 / -1;
		position: relative;
		z-index: 1;
	}

	& .image {
		grid-row: 1;
		grid-column: 1 / -1;
		position: relative;
		z-index: 0;
	}
`

function Project({ project }) {
	return (
		<StyledProjectHero>
			<h1 className="title">{project.name}</h1>
			<img src={project.image} className="image"/>
		</StyledProjectHero>
	)
}

export async function getStaticPaths() {
	return {
		paths: allProjects.map( project => `/project/${project.slug}`) || [],
		fallback: true,
	}
}

export async function getStaticProps(context) {
	const { slug } = context.params

	const project = allProjects.filter( project => project.slug === slug )[0]

	return {
		props: {
			project
		}
	}
}

export default Project