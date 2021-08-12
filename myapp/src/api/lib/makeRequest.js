import  { API_ENDPOINT, API_URL_PUBLIC }  from "../endpoints";




export const makeRequest = (url,config) => fetch (
    `${API_ENDPOINT}${url}`,config
).then((response)=>response.json());