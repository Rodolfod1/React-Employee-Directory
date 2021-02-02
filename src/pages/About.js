import React, {useEffect,useState} from 'react'
import API from "../utils/API"
import Hero from "../components/Hero"
import { render } from '@testing-library/react';


// call to main function to render about page 
const About = () => {
    // declaring variable to set state 
    const [id, setId]= useState({});
    const [employee, setEmployee] = useState({ });

    // Function will get random users when component loads 
    useEffect ( () => {
        loadUsers();
    },[] );
    
    /// API call 
    const loadUsers = () => {
        API.GetItems()
        .then( users =>{
            // assigning object ot employee 
            const employee=users.users.results[0];
            //seed is the unique ID from the API to be used to select specific user 
            const id=users.users.info.seed;
            setEmployee(employee);
            setId(id);
            console.log(employee.email);
            console.log(id);
                       
        })
        .catch(err => console.log(err));
    };

     
        return (
            <div>
               
                <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7njMApBZ1PyHUSg5cKmojRKQti_JvTRznw&usqp=CAU">
                    <h1> Welcome to the Employee Directory </h1>
                </Hero>
           
            
            </div>
        )


    }
    


export default About
