import React, {useEffect,useState} from 'react'
import API from "../utils/API"


// call to main function to render about page 
const About = () => {
    // declaring variable to set state 
    const [employees, setEmployees] = useState([{}]);

    // Function will get random users when component loads 
    useEffect ( () => {
        loadUsers();
    },[] );
    
       /// API call 
    const loadUsers = () => {
        API.GetItems()
        .then(results=> {
            
            setEmployees(results.data.results)
         
             
        })
        .catch((err)=>{ 
            console.log(err);
        })
    }
    //logging the array to verify array 
    console.log(employees);
     
        return (
            <div>
                       

                <table>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>



                <tbody>
                    { employees[0] !==undefined && employees[0].name !==undefined ? (
                            employees.map(({email,phone,login,name,location}) => {
                                return (
                                    // <tr>
                                    <tr key={login.uuid}>
                                        <td>{email}</td>
                                        <td>{phone}</td>
                                       
                                    <td>{name.last}</td>
                                    <td>{name.first}</td>
                                    
                                    <td>{location.country}</td>
                                </tr>
                                   
                                    
                            
                                    
                                ) 
                            })
                    ) : (
                        <></>
                    ) }


                      
                </tbody>
            </table>
            
            </div>
        )


    }
    


export default About
