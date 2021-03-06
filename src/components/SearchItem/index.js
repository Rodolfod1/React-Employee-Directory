import React from 'react';
import "./style.css";

const SearchItem = ({filterEmployees}) => {
    return (
        <form className="form-inline">
        <input className="form-control form-control-sm mr-3 w-5 mycity" id="citySelect" type="text" placeholder="Employee Last Name" onChange={a=>filterEmployees(a)} aria-label="Search"/>
                                <a href="#" id="search"> <i className="fas fa-search" aria-hidden="true"></i></a>
                        </form>
    )
}

export default SearchItem
