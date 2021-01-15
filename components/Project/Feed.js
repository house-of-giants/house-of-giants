import useSWR from 'swr'

import ProjectCard from '@/components/Project/ProjectCard'
import { fetcher } from '@/utils/fetcher'

const Feed = () => {
	const { data } = useSWR('/api/projects', fetcher)

	if (!data) return 'loading...'

	return (
		<div>
			{data.map(project => (
				<ProjectCard name={project.name} excerpt={project.excerpt} image={project.image} slug={project.slug} tech={project.tech} key={project.slug} />
			))}
		</div>
	)
}

export default Feed