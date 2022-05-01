import { url } from "./constant";
import axios from "axios";

const verify = (data) => {
    console.log("Data::::", data)
    return axios.post(`${url}/auth/`, data,
            {
                headers: {
                "Content-type": "application/json"
                }
            }).then((response)=>{
             
                return response})
        
}

export default verify;
