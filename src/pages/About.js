import React, {useEffect,useState} from 'react'
import API from "../utils/API"
import Hero from "../components/Hero"
import { render } from '@testing-library/react';


// call to main function to render about page 
const About = () => {
    // declaring variable to set state 
    const [id, setId]= useState({});
    const [employees, setEmployees] = useState([]);

    // Function will get random users when component loads 
    useEffect ( () => {
        loadUsers();
    },[] );
    
       /// API call 
    const loadUsers = () => {
        API.GetItems()
        .then(results=> {
            setId(results.data.info.seed)
            setEmployees(results.data.results[0]);
            console.log(employees);
            console.log(id);
        })
        .catch(err => console.log(err));
    }

     
        return (
            <div>
               
                <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7njMApBZ1PyHUSg5cKmojRKQti_JvTRznw&usqp=CAU">
                    <h1> Welcome to the Employee Directory </h1>
                </Hero>
               {/* <h2>{employees.name.last}</h2> <br></br>
               <h3>{employees.name.first}</h3> */}
               
               <h1>{employees.email}</h1>
               <h1>{employees.dob.age}</h1> <br></br>
               <h2>{employees.nat}</h2>
               {/* {employees.picture} */}

            
            </div>
        )


    }
    


export default About
