import axios from "axios";
//getting the info from Random user API 
const BASEURL = "https://randomuser.me/api/?inc=gender,name,nat,id,email,phone,picture,dob";


export default {
  GetItems: ()=> {
    return axios.get(BASEURL)
    .then(res=> {
      const users=res.data;
      return {users}
   
    })
  }
};
