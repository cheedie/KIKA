import { url } from "./constant";
import axios from "axios";

const verify2 = (data) => {
    console.log("Data::::", data)
    // const key = Object.keys(data)[0]
    return axios.post(`${url}/auth/`, data,
            {
                headers: {
                "Content-type": "application/json"
                }
            }).then((response)=> response.status === 200 && response.data.key ? true 
            : response.status === 200 && response.data.success ? true : false)
        
}
const verify = (data) => {
    console.log("Data::::", data)
    // const key = Object.keys(data)[0]
    return axios.post(`${url}/auth/`, data,
            {
                headers: {
                "Content-type": "application/json"
                }
            }).then((response)=>{
                //console.log("RESPONSE::: ",response)
                return response})
        
}

export default verify;
