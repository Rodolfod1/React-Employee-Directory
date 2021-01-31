
import React, {useState, useEffect } from 'react'
import API from "../utils/API"

const GetInfo = () =>{

}


const Employee = () => {
        useEffect( ()=>{
            FetchItems();
        },[])

    // const [items, setItems] = useState([]);
    const FetchItems = ()=> {
        API.GetItems()
        // .then(res => this.useState({ Employees: res.data.message}))
        .then(res => console.log(res))
        .catch(err => console.log(err));
       
        
    }
    return (
        <div>
            <h1> TEST ES </h1>
        </div>
    )
}

export default Employee

