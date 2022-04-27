import { url } from "./constant";
import axios from "axios";

const verify = (data) => {
    console.log("Data", data)
    const key = Object.keys(data)[0]
    const response = axios.post(`${url}/auth/`, data,
            {
                headers: {
                "Content-type": "application/json"
                }
            })
        if(response){
            return response
        }else{
            response.data = {
                message : `Cannot confirm ${key === 'business_name'? "Business Name": key}`,
                key
            }
            
             
            
            return response;
        }
        
}

export default verify;
