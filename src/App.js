import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero"
import Main from "./pages/Main";
import Footer from "./components/Footer"

function App() {
  return (
      <div>
         <Hero>
          {/* <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7njMApBZ1PyHUSg5cKmojRKQti_JvTRznw&usqp=CAU"> */}
        <h1> Welcome to the Employee Directory </h1>
        </Hero>
      <Footer />
      </div>
  
    // <Hero />
//  <Router>
//    <div>
//     <Route exact path="/" component={Main} />
//     <Route exact path="/main" component={Main} />
//    </div>
   
//  </Router>
  );
}

export default App;
