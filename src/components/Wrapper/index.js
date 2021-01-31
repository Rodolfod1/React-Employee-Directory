import React from "react";
import "./style.css";

export const Wrapper = (props)=>{
    return <main className="wrapper">{props.children}</main>;
}