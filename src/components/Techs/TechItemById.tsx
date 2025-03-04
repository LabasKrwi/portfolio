import { FC, useEffect } from 'react'
import { useFetchById } from '../../hooks/useFethcing'
import { $techById, $techId } from '../../generalstore/store'
import { useUnit } from 'effector-react'
import { fetchTechsByIdEffect } from '../../generalstore/effects'
const TechById: FC = () => {
    const techById = useUnit($techById);
    const techId = useUnit($techId);
    const [fetchTechById, isTechIdLoading, isTechIdError] = useFetchById(async () => {
        if (techId > 0) {
            const response = await fetchTechsByIdEffect(techId);
            return {response}
        }
        return null; 
    });

    
    useEffect(() => {
        const fetchData = async () => {
            if (techId > 0) {
                await fetchTechById()
            }
        }
        fetchData();
    }, [techId]);
    

  return (
    <div>
    {techById?.id ? (
        <div>
            <strong>{techById.title}</strong>
            <div>{techById.body}</div>
            <img 
                src={techById.logo} 
                alt="Logo" 
                style={{ width: '100px', height: 'auto' }} 
            />
        </div>
    ) : (
        <h2>TechItem is empty.</h2>
    )}
</div>
        )  
    }

export default TechById