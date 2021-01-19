import useSWR from 'swr'

import ProjectCard from '@/components/Project/ProjectCard'
import { fetcher } from '@/utils/fetcher'

const FeaturedFeed = () => {
	const { data } = useSWR('/api/projects', fetcher)
	
	if (!data) return 'loading...'

	const featured = data.filter(project => project.featured === true)

	return (
		<div>
			{featured.map(project => (
				<ProjectCard name={project.name} excerpt={project.excerpt} images={project.images} slug={project.slug} tech={project.tech} key={project.slug} />
			))}
		</div>
	)
}

export default FeaturedFeed