import axios from "axios";
//getting the info from Random user API 
const BASEURL = "https://randomuser.me/api/?inc=gender,name,nat,id,email,phone,picture,dob";


export default {
  GetItems: ()=> {
    return axios.get(BASEURL)
    .then(res=> {
      const users=res.data;
      return {users}
      // return users.map(user =>{
      //   return{
      //     users
      //     // name: user.name,
      //     // id: user.id,
      //     // dob: user.dob,
      //     // picture: user.picture,
      //     // phone: user.phone, 
      //     // email: user.email,
      //     // gender: user.gender,
      //     // nat: user.nat
      //   }
      // })
    })
  }
};
