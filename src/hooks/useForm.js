import React, {useEffect,useState} from 'react'

export const useForm  = (initialState) => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(false);
    const [success, setSucess] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setError(false)
            setSucess(false)
        }, 4000);
        return () => {
            clearTimeout(timer)
        }
    }, [success, error])

    return {values,setValues,error,setError,success,setSucess}
}