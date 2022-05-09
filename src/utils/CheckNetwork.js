import { app } from "../utils/constant";
import axios from "axios";
import {useState, useEffect} from "react";



export default async function CheckNetwork(){
    try {
      const online = await axios.get(`${app}/`)
       console.log("ISONLINE request? ", online)
      return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
      return false; // definitely offline
    }
  
    // const [isOnline, setNetwork] = useState(checkOnlineStatus);
    // const updateNetwork = () => {
    //    setNetwork(checkOnlineStatus());
    // };
    // useEffect(() => {
    //   updateNetwork()
    // });
    
    // console.log("ISONLINE? ", isOnline)
    // return isOnline;
 };