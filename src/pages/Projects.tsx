import { useUnit } from 'effector-react'
import { FC, useEffect } from 'react'
import { $projects } from '../generalstore/store'
import useFetching from '../hooks/useFethcing'
import { fetchProjectsEffect } from '../generalstore/effects'
import ProjectList from '../components/Projects/ProjectList'
const Projects:FC = () => {
    const projects = useUnit($projects);
    const [fetchProjects, isProjectsLoading, isProjectsError] = useFetching(async () => {
        await fetchProjectsEffect();
    })

    useEffect(()=> {
        setTimeout(() => fetchProjects(), 2000)
    }, [])

    if (isProjectsError) {
        return (
            <h1>Произошла ошибка...</h1>
        )
    }
  return (
    <div>
        {isProjectsLoading 
            ?
            <h1>Идет загрузка....</h1>
            :
            <ProjectList projects={projects}/>
        }
    </div>
  )
}

export default Projects