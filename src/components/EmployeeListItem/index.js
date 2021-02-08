import React, {useEffect,useState} from 'react'
import axios from "axios";
import SearchItem from "../SearchItem"
// import EmployeeHeader from "../EmployeeHeader"
const BASEURL = "https://randomuser.me/api/?results=50&nat=us,br,fr,de,tr,es";


// call to main function to render about page 
const EmployeeListItem = () => {
   // this is not necessary but here im storing the data on two arrays in case i want to save a baseline for future manipulation 
    const [myState, setMyState] = useState({
        employees: [],
        sortedEmployees:[] 
    });
    const [auxEmp,setAuxEmp]= useState([{}])

    // Function will get random users when component loads 
    useEffect ( () => {
        loadUsers();
    },[] );
    
       /// API call 
    const loadUsers = () => {
        // API.GetItems()
        axios.get(BASEURL)
        .then(results=> {
                     setMyState({...myState, employees:results.data.results, sortedEmployees:results.data.results})
                     setAuxEmp(results.data.results)
        })
        .catch((err)=>{ 
            console.log(err);
        })
    }
    // ======================================================================
 //  Generic function to sort an Array of objects based on a key and a direction by R.Diaz
    const [ sortConfig, setSortConfig]=useState({
            key:"name.last", 
                direction: "ascending"
        });

      //function to compare dynamically an array of objects 
    const SortMyTable = (sortConfig) =>{
        
        return function innerSort(a,b){

            // if(!a.hasOwnProperty(sortConfig.key)|| !b.hasOwnProperty(sortConfig.key)){
            //     return 0;
            // }
             let e ="";
             let f="";

            if (sortConfig.key === "first"){
                 e= a.name.first;
                 f= b.name.first;
            } else if (sortConfig.key === "last") {
                 e= a.name.last;
                 f= b.name.last;
            } else if (sortConfig.key === "country"){
                 e= a.location.country;
                 f= b.location.country;
            } else {    
            
             e= a[sortConfig.key];
             f= b[sortConfig.key]
            }
         
            let comparison =0;
            if (e>f) {
                comparison =1;
            } else if (e<f){
                comparison = -1;
            }

            return (
                (sortConfig.direction ==='descending') ? (comparison * -1):comparison 
            );
         
        }
    }

  // making a request for sorting 
  const RequestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
   
  }
  // im calling my function with this and passing sorted employees 
  const sortedTable=myState.sortedEmployees;
    sortedTable.sort(SortMyTable(sortConfig))
    // console.log("MY NEWEST");
   // console.log(sortedTable);

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
          return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
      };
  
 // applying filtering 
 const filterEmployees = a =>{

     const myTable= [...auxEmp];
    
    if (!a.target.value){
          setMyState(({...myState,sortedEmployees:auxEmp}))
     } else {
         const query=a.target.value.toLowerCase();
             const filterApply= (arr, query)=> {
             return arr.filter(employee => {
                 return(
                     employee.name.last.toLowerCase().indexOf(query) !== -1
             )
             })
           
            }
            setMyState(({...myState,sortedEmployees:filterApply(myTable,query)}))
            }      
     }

        return ( 
            <div className="container">
                <SearchItem filterEmployees={filterEmployees} />
            <table>
                <thead>
                    <tr>
                        <th>
                        <button type="button"   className={getClassNamesFor('location')} onClick={() => RequestSort('country')}>
                            Location
                            </button>
                            </th>
                        <th>
                        <button type="button"  className={getClassNamesFor('LastName')} onClick={() => RequestSort('last')}>
                            Last Name
                            </button>
                            </th>
                        <th>
                        <button type="button" className={getClassNamesFor('FirstName')} onClick={() => RequestSort('first')}>
                            First Name
                            </button>
                            </th>
                        <th>
                        <button type="button" className={getClassNamesFor('Phone')} onClick={() => RequestSort('phone')}>
                        Phone
                        </button>
                         </th>
                        <th>
                        <button type="button" className={getClassNamesFor('Email')} onClick={() => RequestSort('email')}>                   
                            Email
                        </button>
                            </th>
                        <th>
                       
                            Profile
                           
                            </th>
                    </tr>
                </thead> 

                <tbody>
                    { myState.sortedEmployees[0] !==undefined && myState.sortedEmployees[0].name !==undefined ? (
                            myState.sortedEmployees.map(({email,phone,login,name,location,picture}) => {
                                return (
                                    // <tr>
                                    <tr key={login.uuid}>
                                        <td>{location.country}</td>
                                       
                                    <td>{name.last}</td>
                                    <td>{name.first}</td>
                                    <td>{phone}</td>
                                    <td>{email}</td>
                                    
                                  
                                    <td data-th="Image" className="align-middle">
                                    <img src={picture.medium} alt={"profile image for " + name.first + " " + name.last} className="img-responsive"/>
                                    </td>
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

export default EmployeeListItem