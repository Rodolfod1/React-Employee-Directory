import { BrowserRouter as Router, Route } from "react-router-dom";
// import Hero from "./components/Hero"
import About from "./pages/About";
import Footer from "./components/Footer"
import Wrapper  from "./components/Wrapper";
import Hero from "./components/Hero";
import EmployeeTable from "./components/EmployeeTable";
import SearchItem from "./components/SearchItem";

function App() {
  return (
      <Router>
        <div>
          <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7njMApBZ1PyHUSg5cKmojRKQti_JvTRznw&usqp=CAU">
                    <h1> Welcome to the Employee Directory </h1> </Hero>
          <SearchItem/>          
          <Wrapper>
            <EmployeeTable>
              <Route path="/" exact component={About} />
              <Route path="/about" component={About} />
            </EmployeeTable>
          </Wrapper>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
