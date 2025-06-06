import { FC, useEffect } from 'react'
import { useFetchById } from '../../hooks/useFethcing'
import { fetchProjectByIdEffect } from '../../generalstore/effects'
import { $projectById } from '../../generalstore/store'
import { useUnit } from 'effector-react'
import { $projectId } from '../../generalstore/store'
import MyLoader from '../UI/MyLoader/MyLoader'

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
        $projectById.reinit();
        $projectById.reset();
    }, [projectId]);
    

  return (
    <div>
    {projectById?.id ? (
        <div>
            <strong>{projectById.title}</strong>
            <div>{projectById.body}</div>
            <a href={projectById.link}>{projectById.link}</a>
        </div>
    ) : (
        <MyLoader />
    )}
</div>
        )  
    }

export default ProjectById