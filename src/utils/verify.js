import { url } from "./constant";
import axios from "axios";

const verify = (data) => {
    // console.log("Data", data)
    // const key = Object.keys(data)[0]
    return axios.post(`${url}/auth/`, data,
            {
                headers: {
                "Content-type": "application/json"
                }
            }).then((response)=>response)
        
}

export default verify;
