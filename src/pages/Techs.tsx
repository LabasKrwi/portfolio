import { useUnit } from 'effector-react'
import { FC, useEffect } from 'react'
import { $techs } from '../generalstore/store'
import useFetching from '../hooks/useFethcing'
import { fetchTechsEffect } from '../generalstore/effects'
import TechsList from '../components/Techs/TechList'
const Techs: FC = () => {
    const techs = useUnit($techs);
    const [fetchProjects, isTechsLoading, isTechsError] = useFetching(async () => {
        await fetchTechsEffect();
    })

    useEffect(()=> {
        fetchProjects()
    }, [])

    if (isTechsError) {
        return (
            <h1>Произошла ошибка...</h1>
        )
    }
  return (
    <div>
        {isTechsLoading 
            ?
            <h1>Идет загрузка....</h1>
            :
            <TechsList techs={techs}/>
        }
    </div>
  )
}

export default Techs