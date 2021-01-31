import axios from "axios";
//getting the info from Random user API 
const BASEURL = "https://randomuser.me/api/?results=5&inc=name,gender,nat&noinfo";


export default {
  GetItems: ()=> {
    return axios.get(BASEURL);
  }
};
