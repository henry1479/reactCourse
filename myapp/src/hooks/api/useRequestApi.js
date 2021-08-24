import { useState, useEffect } from "react";

export const useRequestApi = ({api, isAutoRun}) => {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState();
    const [data, setData] = useState();

    const request = async ()=> {
        setLoading(true);
       const[error,data] = await api();

       if(error) {
           setError(error);
       }

       if (data) {
           setData(data)
       }

       setLoading(false);
    }

    useEffect(
        ()=>{
            if(!isAutoRun) {
                return 
            }
            void request();

        }, []
    )

    return {
        isLoading,
        isError, 
        data,
        request,
    }

}