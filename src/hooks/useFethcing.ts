import { useState } from "react";

const useFetching = (callback: ()=> Promise<any>) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('')

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback()
        }
        catch (e ){
            if (e instanceof Error) {
                setError(`Произошла ошибка:, ${e.message}`)
            } else {
                setError('Произошла неизвестная ошибка')
            }
        }
        finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error] as const
}

export default useFetching