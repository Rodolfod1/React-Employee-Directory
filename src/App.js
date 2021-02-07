import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper  from "./components/Wrapper";
import Hero from "./components/Hero";
import SearchItem from "./components/SearchItem";
import Home from "../src/pages/Home"

function App() {
  return (
      
      <div>
        <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7njMApBZ1PyHUSg5cKmojRKQti_JvTRznw&usqp=CAU">
                   <h1> Welcome to the Employee Directory </h1> <br/> <h4>Sort by Phone or Email or use the Search Button to filter </h4></Hero>
                
        <Wrapper>
          
          <Home />
        </Wrapper>
      </div>
  );
}

export default App;
