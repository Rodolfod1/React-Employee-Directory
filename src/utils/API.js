import axios from "axios";
//getting the info from Random user API 
const BASEURL = "https://randomuser.me/api/?results=50&nat=us,br,fr,de,tr,es";

export default {
  GetItems: ()=> {
    return axios.get(BASEURL)
  }
};



