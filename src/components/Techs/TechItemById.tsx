import { FC, useEffect } from 'react'
import { useFetchById } from '../../hooks/useFethcing'
import { $techById, $techId } from '../../generalstore/store'
import { useUnit } from 'effector-react'
import { fetchTechByIdEffect } from '../../generalstore/effects'
import MyLoader from '../UI/MyLoader/MyLoader'
const TechById: FC = () => {
    const techById = useUnit($techById);
    const techId = useUnit($techId);
    const [fetchTechById, isTechIdLoading, isTechIdError] = useFetchById(async () => {

        if (techId > 0) {
            const response = await fetchTechByIdEffect(techId);
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
        $techById.reinit();
        $techById.reset();
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
        
        <MyLoader />
        
    )}
</div>
        )  
    }

export default TechById