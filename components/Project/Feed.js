import useSWR from 'swr'
import ProjectCard from '@/components/Project/ProjectCard'

const fetcher = url => fetch(url).then(r => r.json())

const Feed = () => {
  const { data } = useSWR('/api/projects', fetcher)

	if (!data) return 'loading...'

	return (
		<div>
			{data.map(project => (
				<ProjectCard name={project.name} excerpt={project.excerpt} image={project.image} key={project.name} />
			))}
		</div>
	)
}

export default Feed