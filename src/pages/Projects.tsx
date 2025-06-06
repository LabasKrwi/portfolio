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
        setTimeout(() => {
            fetchProjects()
        }, 3000)
            
    }, [])

    if (isProjectsError) {
        return (
            <h1>Произошла ошибка...</h1>
        )
    }
  return (
    <>
        {isProjectsLoading 
            ?
            <span className="bg-[#AE944F] text-white dark:bg-[#919191] vertical-timeline-element-icon bounce-in"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--eos-icons" width="4em" height="4em" viewBox="0 0 24 24"><g><path fill="currentColor" d="M7 3H17V7.2L12 12L7 7.2V3Z"><animate id="iconifyReact2" fill="freeze" attributeName="opacity" begin="0;iconifyReact3.end" dur="2s" from="1" to="0"></animate></path><path fill="currentColor" d="M17 21H7V16.8L12 12L17 16.8V21Z"><animate fill="freeze" attributeName="opacity" begin="0;iconifyReact3.end" dur="2s" from="0" to="1"></animate></path><path fill="currentColor" d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5ZM12 11.5L8 7.5V4H16V7.5L12 11.5Z"></path><animateTransform id="iconifyReact3" attributeName="transform" attributeType="XML" begin="iconifyReact2.end" dur="0.5s" from="0 12 12" to="180 12 12" type="rotate"></animateTransform></g></svg></span>
            :
            <ProjectList projects={projects}/>
        }
    </>
  )
}

export default Projects