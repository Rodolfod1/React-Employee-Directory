import axios from "axios";
//getting the info from Random user API 
const BASEURL = "https://randomuser.me/api/";

export default {
  GetItems: ()=> {
    return axios.get(BASEURL)
  }
};



