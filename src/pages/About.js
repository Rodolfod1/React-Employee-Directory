import React, {useEffect,useState} from 'react'
import API from "../utils/API"
import Hero from "../components/Hero"


// calll to main function to render about page 
const About = () => {
    // declaring variable to set state 
    const [user,setUser] = useState ({});
    const [users, setUsers]= useState ({});
    const [userIndex, setUserIndex] = useState ({});

    // Function will get random users when component loads 
    useEffect (()=>{
        loadUsers();
    },[] );
    
    /// API call 
    const loadUsers = () => {
        API.GetItems()
        .then( users =>{
            console.log(users);
            // setUsers(users);
            // setUser(user[0]);
            
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7njMApBZ1PyHUSg5cKmojRKQti_JvTRznw&usqp=CAU">
                <h1> Welcome to the Employee Directory </h1>
            </Hero>
        </div>
    )
}

export default About
