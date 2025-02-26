import { FC, useEffect } from 'react'
import { useFetchById } from '../../hooks/useFethcing'
import { fetchProjectByIdEffect } from '../../generalstore/effects'
import { $projectById } from '../../generalstore/store'
import { useUnit } from 'effector-react'
import { $projectId } from '../../generalstore/store'
import { setProjIdDataEv } from '../../generalstore/events'
import { IProject } from '../../types/Project'
const ProjectById: FC = () => {
    const projectById = useUnit($projectById);
    const projectId = useUnit($projectId);
    const [fetchProjectById, isProjectIdLoading, isProjectIdError] = useFetchById(async () => {
        if (projectId > 0) {
            const response = await fetchProjectByIdEffect(projectId);
            return {response}
        }
        return null; 
    });

    
    useEffect(() => {
        const fetchData = async () => {
            if (projectId > 0) {
                await fetchProjectById()
            }
        }
        fetchData();
    }, [projectId]);
    

  return (
    <div>
    {projectById?.id ? (
        <>
            <strong>{projectById.title}</strong>
            <div>{projectById.body}</div>
            <a href={projectById.link}>{projectById.link}</a>
        </>
    ) : (
        <h2>Project not found.</h2>
    )}
</div>
        )  
    }

export default ProjectById