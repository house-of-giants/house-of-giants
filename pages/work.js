import useSWR from 'swr'
import styled from 'styled-components'
import { fetcher } from '@/utils/fetcher'
import ListItem from '@/components/Project/ListItem'

const Container = styled.div`
	padding-top: 3rem;
	counter-reset: menucounter;

	& .wrap {
		margin: 3rem auto;
		max-width: 1280px;
	}

	& a {
		box-shadow: none;
		border-bottom: 1px solid var(--c-light-s);
		display: block;
		margin: 0 auto;
		max-width: 1280px;
		padding: 0 4rem;

		@media (--min-width: 1220px) {
			padding: 0;
		}

		&:hover,
		&:focus {
			box-shadow: none;
		}
	}

	& .project-reveal {
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		pointer-events: none;
		opacity: 0;
		overflow: hidden;
	}

	& .project-item {
		position: relative;

		&::before {
			counter-increment: menucounter;
			content: counters(menucounter, ".", decimal-leading-zero);
			position: absolute;
			left: 0;
			border-left: 3px solid currentColor;
			top: 20%;
			height: 60%;
			padding-left: 1rem;
			display: flex;
			align-items: center;
			line-height: 1;
			font-weight: bold;
			opacity: 0;
			transform: translateX(-1rem);
			transition: transform 300ms, opacity 300ms;
		}

		&:hover {
			&::before {
				opacity: 1;
				transform: translateX(0);
			}
		}
	}

	& .project-title {
		display: inline-block;
		margin: 3rem 0;
		position: relative;
		transition: opacity 300ms ease;
		z-index: 0;

		&::after {
			background-color: var(--c-secondary-h);
			content: "";
			height: 100%;
			opacity: 0;
			position: absolute;
			transition: transform 300ms ease, opacity 300ms ease;
			transform: translateX(0);
			width: 2px;
		}
	}

	& .project-meta {
		color: var(--c-light-h);
		display: inline-block;
		margin-left: 3rem;
		pointer-events: none;
		opacity: 0;
		transition: transform 300ms ease, opacity 300ms ease;
		transform: translateY(-25%);
	}

	& .project-image {
		height: 320px;
		width: 220px;
		overflow: hidden;

		& img {
			height: 100%;
			object-fit: cover;
			width: 100%;
		}
	}
`

export default function Work() {
	const { data } = useSWR('/api/projects', fetcher)
	const animateable = {
		tx: {previous: 0, current: 0, amt: 0.08},
		ty: {previous: 0, current: 0, amt: 0.08},
		rotation: {previous: 0, current: 0, amt: 0.08},
		brightness: {previous: 0, current: 0, amt: 0.08}
	}

	if(!data) return <div>Loading...</div>

	return(
		<Container>
			<div className="wrap">
				<h1>Portfolio</h1>
				<p>House of Giants is proud to have partnered with these excellent folks</p>
			</div>
			{data.map(project => (
				<ListItem project={project} animateable={animateable} key={project.slug} />
			))}
		</Container>
	)
}