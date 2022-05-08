import { url } from "../utils/constant";
import axios from "axios";
import {useState, useEffect} from "react";

const checkOnlineStatus = async () => {
    try {
      const online = await axios.get(`${url}/`)
      
    console.log("ISONLINE request? ", online)
      return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
      return false; // definitely offline
    }
  };

export default function CheckNetwork(){
    const [isOnline, setNetwork] = useState(checkOnlineStatus());
    const updateNetwork = () => {
       setNetwork(checkOnlineStatus());
    };
    useEffect(() => {
       window.addEventListener("offline", updateNetwork);
       window.addEventListener("online", updateNetwork);
       return () => {
          window.removeEventListener("offline", updateNetwork);
          window.removeEventListener("online", updateNetwork);
       };
    });
    
    console.log("ISONLINE? ", isOnline)
    return isOnline;
 };